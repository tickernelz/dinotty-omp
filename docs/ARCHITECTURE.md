# Architecture

OMP Pilot runs as two pieces that talk over a single JSON pipe: a Vue plugin inside the Dinotty renderer, and a small Node CLI that the host launches on demand.

```
Dinotty renderer (browser)                      host process
+------------------------------+                +-------------------------+
| main.ts  activate(ctx)       |                | bin/omp-bridge          |
|   overlay    MiniHudOverlay  |  ctx.exec.run  |   node, ESM             |
|   monitor    status series   | -------------> |   argv in               |
|   component  MainView        | <------------- |   one JSON line out     |
|   commands   quick picks     |                |                         |
+------------------------------+                +-------------------------+
              |                                            |
              | ctx.workspace readFile/readDir/stat        | fs, child_process
              v                                            v
        OMP agent directory                      process table, tmux server
```

## Browser side

`src/main.ts` exports `activate(ctx)` and returns the plugin's contributions:

- `component` -- `MainView.vue`, the tab the host opens for this plugin, carrying the Sessions and Traces, Skill Matrix, and Presets and Profiles panes.
- `overlay` -- one interactive entry rendering `MiniHudOverlay.vue` with a drag handle.
- `monitor.series` -- one series, `dinotty-omp:session`, labelled `OMP session cost`. It polls every 2500 ms, re-polls on `terminal.onDidChangeActivePane`, and exposes `current`, `statusText` and `detail` to the host status bar. The HUD polls the same source independently every 2000 ms.
- Commands: `omp.open-session-viewer` and `omp.tmux-copymode` are plain commands; `omp.quick-launch`, `omp.split-launch` and `omp.skill-palette` are quick picks whose item lists are computed when opened.

`deactivate()` disposes every registration collected during activation, including the monitor's interval and pane listener.

The services under `src/services` hold the logic:

| Module | Responsibility |
| --- | --- |
| `hostInfo.ts` | Calls the bridge's `doctor` action once and caches the answer for the session. Everything that needs to know the platform, the home directory, the OMP agent directory or whether tmux exists reads it from here rather than sniffing the browser. Also carries the path helpers that keep Windows and POSIX separators straight. This is what makes Windows work: every OMP path is built by joining the absolute `ompHome` and `home` the bridge reported, so nothing in the browser ever emits a `~` string that only a POSIX shell could expand. |
| `sessionResolver.ts` | Asks the bridge which session belongs to the active pane, lists and loads transcripts through the workspace API, and parses JSONL into turns, tool calls, usage and status. |
| `statusMonitor.ts` | Builds the status bar series from the resolver's snapshot, and returns a disposable that stops polling. |
| `tmuxLauncher.ts` | Builds the launch argv, derives the tmux session name, and sends the copy-mode key sequence. |
| `presetService.ts` | Scans the OMP agent directory for `config.<name>.yml` and builds quick-pick items. |
| `skillService.ts` | Scans the skill roots, parses `SKILL.md` frontmatter, classifies and filters, and injects `/skill <name>` into the active pane. |

Nothing in the browser decides the platform for itself. The launcher wraps `omp` in tmux when `doctor` reports tmux present and the platform is not Windows, and launches `omp` directly otherwise; the copy-mode toggle refuses with a notification instead of sending keys into a shell that has no tmux.

Vue is not bundled. `vite.config.ts` aliases `vue` to `src/shims/vue.ts`, which re-exports the runtime the host publishes on `window.__DINOTTY_VUE__` and throws immediately if it is missing. The build emits exactly `dist/main.js` and `dist/styles.css`, the two files `plugin.json` points at.

## Why a Node helper exists at all

The browser side already has a filesystem API through `ctx.workspace`. Two things it cannot do forced the bridge into existence.

**Large transcripts are truncated.** `workspace.readFile` does not return arbitrarily large files; truncation was observed at roughly 500 KB. OMP session transcripts are JSONL that grows with every turn and routinely passes several megabytes in a long session. A truncated transcript does not fail loudly -- it parses fine and silently under-reports tokens and cost, because the newest usage numbers live at the end of the file. Metering therefore has to happen where the whole file can be read.

**Pane-to-workspace resolution needs process introspection.** The renderer knows a pane id. It does not know that pane's shell pid, its controlling tty, which tmux client is attached to that tty, which tmux session that client is looking at, what that session's current path is, which agent processes are alive, or which transcript file any of them currently holds open. All of that is process-table, filesystem and tmux-server state: unreachable from a browser context, and cheap from Node.

So the split is: the browser owns rendering and anything cheap, the bridge owns anything that needs the real operating system. The plugin declares `native.execute` in `plugin.json` for exactly this, and reaches the helper through `ctx.exec.run([...])`, which the host routes to the `bin` entry declared in the manifest -- `./bin/omp-bridge` normally, and `./bin/omp-bridge.cmd` on `windows-x86_64` and `windows-aarch64`, a wrapper that invokes `node` on the same script.

## Bridge contract

The helper takes an action as its first argument, writes exactly one JSON document to stdout, and exits. Exit code is 0 for every known action and 1 for an unknown one, which emits `{"error":"unknown action: <name>"}`.

| Invocation | Meaning |
| --- | --- |
| `pane <paneId> [cwdHint]` | Resolve the given Dinotty pane. The optional hint is the working directory the renderer believes the pane is in, used when process resolution cannot answer. |
| `active` | The same code path with no pane id; resolution falls through to the hint and the fallbacks below. |
| `tmux-panes` | List every tmux pane on the machine. |
| `doctor` | Report the host environment. |

`pane` and `active` return:

```json
{
  "cwd": "<normalised workspace directory>",
  "sessionFile": "<absolute path to a .jsonl transcript, or an empty string>",
  "isRunning": true,
  "state": "inactive | starting | running",
  "summary": {
    "model": "<model id>",
    "provider": "<provider id>",
    "thinkingLevel": "<level>",
    "totalTokens": 0,
    "totalCost": 0,
    "turns": 0,
    "status": "idle | thinking | running_tool | error"
  }
}
```

`state` is the field the UI renders, and the three values are distinct situations:

| `state` | Meaning |
| --- | --- |
| `inactive` | No live agent process was found for this workspace. `summary` is null. |
| `starting` | An agent process is alive, but no transcript was found yet, or the transcript has not produced usable metrics. `summary` is null. |
| `running` | An agent process is alive and its transcript parsed. `summary` is populated. |

`totalTokens` is the context token count when the transcript reports one, falling back to the cumulative total. `totalCost` is rounded to six decimals. `turns` counts assistant turns. `status` is forced to `running_tool` whenever tool calls are still outstanding, regardless of the last turn seen.

`tmux-panes` returns an array of `{ session, active, cwd, command }`, where `active` is a boolean, and an empty array on Windows or when tmux is not installed.

`doctor` returns `{ platform, node, home, ompHome, ompHomeExists, tmux, liveClients }`. The browser caches it for the life of the session and uses it to decide every platform-dependent behaviour.

Every shell-out inside the helper goes through a guarded `execFileSync` with a short timeout whose failure yields an empty string, so a missing tmux server, a denied `ps`, or a slow `lsof` degrades the answer rather than producing an error.

## Pane to workspace

1. Look up the pane id in the host's session ledger at `~/.config/dinotty/session-ledger.json` and take the `pid` recorded for it.
2. Read that pid's controlling tty with `ps`, then match it against `tmux list-clients` to find which tmux session that client is attached to, and take that session's `pane_current_path`.
3. If that did not resolve, read `/proc/<pid>/cwd`.
4. If that did not resolve either, use the `cwdHint` the renderer passed.

Every result is normalised: `~` expanded, made absolute, trailing separators dropped, and lower-cased on Windows so that comparisons are case-insensitive there. Steps 1 to 3 are POSIX-only by construction; on Windows the hint is the whole of the resolution.

## Which agent is running, and in which file

Liveness does not come from scanning for a process named `omp`. OMP itself records every live client under `~/.omp/run/daemons/<daemon>/clients/<id>.json`, each carrying a `pid` and a `projectDir`. The helper reads those records, keeps the ones whose pid is still alive, and matches `projectDir` against the resolved workspace. No match means `inactive`.

For the matching pids it then finds the transcript the agent actually has open, rather than guessing:

- On Linux, by reading `/proc/<pid>/fd` and keeping the links that end in `.jsonl`.
- On macOS, by asking `lsof -p <pid> -Fn` for the same.
- On Windows, neither is available, so the helper falls back to the newest transcript in the workspace directory and accepts it only if it was modified within the last 90 seconds. A stale file is treated as no session at all, which is why an idle Windows session reports inactive instead of reporting old numbers.

Candidates must match the session filename pattern, and the newest by mtime wins.

## Locating transcripts

The OMP agent directory is `$PI_CODING_AGENT_DIR` when set, and `~/.omp/agent` otherwise. Sessions live one directory per workspace under `sessions/`. The directory name is the workspace path relative to the home directory, prefixed with `-`, with every run of unsupported characters replaced by `-`:

```
~/Projects/dinotty-omp   ->   <agent dir>/sessions/-Projects-dinotty-omp
```

A path outside the home directory is encoded from its own segments instead, and a workspace that reduces to nothing is stored under `-`.

Inside that directory each session is one JSONL file named `<timestamp>_<uuid>.jsonl`, for example `2026-09-19T10-05-04-616Z_01a0b920-6ae8-7011-9f7b-cd56d82d7d06.jsonl`. The helper matches that shape with a pattern rather than a suffix check, so scratch files and internal files beginning with `__` are never mistaken for a session.

The browser side implements the same encoding so the Explorer can list a workspace's transcripts without the bridge, and widens to the most recently modified transcripts across every workspace directory when the current one holds nothing.

## Incremental metering

Re-reading a multi-megabyte transcript every two seconds would be wasteful, so the helper reads each file once and then only reads what was appended.

It keeps a cache in the system temporary directory, `dinotty-omp-metrics.json`, written with mode `0600` and capped at 24 entries evicted by last use. Each entry stores the running totals plus the byte offset already consumed and the file's mtime. On the next call the helper seeks to that offset, reads only the new bytes, and advances the offset to the last complete line -- a partial trailing line is left for the next call rather than parsed half-written. If the file shrank or the cached entry is gone, the totals reset and the file is read from the start.

This is why the HUD stays responsive on a transcript the renderer would refuse to load whole, and why the numbers it reports are complete while the Explorer's badges on a very large transcript are a lower bound.

## Transcript format

Both sides parse the same JSONL, line by line, ignoring lines that fail to parse. The record types that matter:

| Record | Effect |
| --- | --- |
| `type: "session"` | Carries the session id and the working directory. |
| `type: "model_change"` | Updates the active model, provider and thinking level. |
| `type: "thinking_level_change"` | Updates the thinking level. |
| `type: "message"` | A turn. Usage on the message updates the token counts and accumulates cost. Assistant content parts split into text, thinking and tool calls; user parts into text and images; tool results attach back to their call by `toolCallId`. |
| `type: "custom", customType: "tool_execution_start"` | Marks a tool call in flight. |
| `type: "custom", customType: "session_exit"` | Returns the session to idle and clears pending calls. |

Status is derived, not stored: a user turn means `thinking`, an outstanding tool call means `running_tool`, and a completed assistant turn with nothing pending means `idle`. The browser parser keeps the full message list for the Explorer; the bridge parser keeps only the aggregate.

# Troubleshooting

Each entry is problem, cause, fix. Start with the two diagnostics below when the HUD or the status bar is involved: almost every metric complaint is a session-resolution problem, and the bridge will tell you which step failed.

## Diagnostic: ask the bridge

Run the helper from the plugin directory the same way the plugin runs it.

**What the host looks like:**

```sh
node ./bin/omp-bridge doctor
```

```json
{"platform":"linux","node":"v20.x.x","home":"...","ompHome":"...","ompHomeExists":true,"tmux":true,"liveClients":1}
```

- `ompHomeExists: false` -- the plugin is looking in the wrong place. Set `PI_CODING_AGENT_DIR` if your OMP agent directory is not `~/.omp/agent`.
- `tmux: false` -- the launcher will start `omp` directly and the copy-mode button will be disabled. That is the designed fallback, not a failure.
- `liveClients: 0` -- OMP is not running anywhere on this machine as far as its own run directory is concerned. Every tab will report inactive.

**What one pane looks like:**

```sh
node ./bin/omp-bridge active
```

On Windows use `node .\bin\omp-bridge active`. Read the `state` field first:

| `state` | What it means | Where to look |
| --- | --- | --- |
| `inactive` | No live agent matched this workspace. | Check `cwd` below, and `liveClients` above. |
| `starting` | An agent is alive but no usable transcript yet. | Normal for a few seconds after launch; persistent means the transcript was not found. |
| `running` | Everything resolved. | If the numbers still look wrong, see the metrics entry below. |

Then check `cwd`. If it is not the directory you are working in, resolution never reached your workspace and nothing downstream can be right.

---

## The plugin does not appear after installing

**Cause.** Dinotty loads `plugin.json` from the plugin directory and then loads the `entry` it points at, `./dist/main.js`. If the link points somewhere else, or the folder was copied before a build, the manifest resolves and the entry does not.

**Fix.**

1. Confirm the plugin directory holds this repository:
   ```sh
   ls ~/.dinotty/plugins/dinotty-omp/plugin.json
   ```
   On Windows, check `%USERPROFILE%\.dinotty\plugins\dinotty-omp`.
2. Confirm the bundle exists:
   ```sh
   ls ~/.dinotty/plugins/dinotty-omp/dist/main.js
   ```
   If it is missing, run `pnpm install && pnpm build` in the checkout. `pnpm run link` refuses to link at all without it, and says so.
3. Reload the Dinotty browser tab. The file watcher notices new plugins, but the renderer needs a reload to load a bundle for the first time.
4. Open the browser developer console and look for an error naming `dinotty-omp`. `host vue bridge missing: window.__DINOTTY_VUE__ not assigned` means the host is older than the Vue bridge this plugin expects; update Dinotty.
5. On Windows, `pnpm run link` reports that symlink creation was denied when Developer Mode is off and the terminal is not elevated. Enable Developer Mode, run elevated, or copy the folder in place.

---

## The HUD says "No OMP session here"

**Cause.** That is `state: inactive`, which means the helper found no live OMP client whose project directory equals the workspace it resolved for your pane. Either no agent is running, or the pane resolved to a different directory than the agent is working in.

**Fix.**

1. Run both diagnostics above. `liveClients: 0` and the answer is simply that OMP is not running.
2. Compare `cwd` from `omp-bridge active` against the directory the agent is actually in. A mismatch is the whole bug: the helper matches on the project directory, so an agent started in a subdirectory of the pane's directory will not match.
3. Confirm the host ledger exists:
   ```sh
   test -f ~/.config/dinotty/session-ledger.json && echo present
   ```
   Without it the pane id cannot be mapped to a shell pid, and resolution depends entirely on the working directory the renderer supplies.
4. Launch through the plugin, with the HUD **Launch** button or `omp.quick-launch`, rather than by hand. The managed launcher starts the agent in the directory the plugin resolved, so the two agree by construction.

---

## The HUD is stuck on "Starting OMP"

**Cause.** `state: starting` means a live agent matched the workspace but the helper has no metrics to show: either it found no transcript the agent has open, or the transcript has not produced a parseable turn yet.

**Fix.**

1. Give it a few seconds. A fresh session legitimately reports `starting` until the first turn is written.
2. Check whether a transcript exists at all for that workspace:
   ```sh
   ls -t ~/.omp/agent/sessions/<encoded-workspace>/*.jsonl | head -3
   ```
   The encoded name is the workspace path relative to your home directory with `-` for every separator, for example `-Projects-dinotty-omp`.
3. Confirm the filename matches the expected shape, `<timestamp>_<uuid>.jsonl`. The helper matches that pattern and ignores anything else in the directory, so a renamed or hand-made file is skipped on purpose.
4. On native Windows, `starting` that never advances is expected for an idle session: see the Windows entry below.

---

## Metrics are wrong, frozen, or from another session

**Cause.** Several different things produce this symptom.

- **Stale by design.** The HUD polls every 2 seconds and the status bar every 2.5 seconds. A reading a few seconds old is normal.
- **Another session in the same workspace.** Two agents working in one directory both write transcripts there. The helper prefers the file the matched process actually has open, so this is rare, but with several live clients in one workspace the newest open file wins.
- **Explorer badges are lower bounds on a large transcript.** The Explorer reads transcripts through the host filesystem API, which truncates large files, and tokens and cost live at the end of the file. The Explorer says so with a banner when it happens. The HUD and status bar do not have this problem; they take their numbers from the bridge.
- **A corrupted metric cache.** The helper stores running totals and a byte offset per transcript in the system temporary directory. If those totals ever look impossible, the cache is the thing to suspect.

**Fix.**

1. Compare the HUD against `node ./bin/omp-bridge active`. If the bridge is right and the HUD is not, reload the tab.
2. Treat token and cost badges inside the Explorer as a floor on a very large transcript. The HUD is authoritative.
3. Reset the incremental metrics cache and let it rebuild from scratch:
   ```sh
   rm -f "${TMPDIR:-/tmp}/dinotty-omp-metrics.json"
   ```
   On Windows, delete `dinotty-omp-metrics.json` from `%TEMP%`. The next poll re-reads the transcripts in full.
4. Run one agent per workspace directory if you need the HUD to track a specific session.

---

## `tmux: command not found`

**Cause.** The launcher asks the host whether tmux exists before using it, so it should never produce this. Seeing it means the command came from somewhere else: the optional shell function in the README, a tmux command you typed, or a pane started before tmux was uninstalled.

**Fix.**

1. Confirm what the plugin thinks:
   ```sh
   node ./bin/omp-bridge doctor
   ```
   `tmux: false` and the plugin is already launching `omp` directly; the **Scroll** button is disabled for the same reason.
2. Install tmux if you want scrollback and copy-mode:
   ```sh
   sudo apt install tmux        # Debian, Ubuntu
   sudo dnf install tmux        # Fedora
   brew install tmux            # macOS
   ```
   The host environment is cached for the life of the browser session, so reload the tab afterwards for the plugin to notice.
3. If you do not want tmux, remove the shell function from the README if you adopted it. Everything except copy-mode and scrollback works without it.

---

## Scrollback still jumps to the bottom

**Cause.** `omp` draws into the alternate screen buffer, which has no scrollback of its own, and the host pins the viewport to the bottom on every write and every resize. Scrolling the host terminal therefore has nothing to scroll. This is exactly what tmux is there to work around, so seeing it means the agent is not inside tmux, or you are scrolling the host instead of tmux's copy-mode.

**Fix.**

1. Confirm the pane is inside tmux:
   ```sh
   echo "$TMUX"
   ```
   Empty means it is not. Relaunch through the plugin, or adopt the optional shell function in the README.
2. Scroll with copy-mode, not the host scrollbar: the HUD **Scroll** button, the `omp.tmux-copymode` command, or the tmux prefix followed by `[`. Press `q` to leave.
3. Give tmux something to keep. The default `history-limit` is small; in `~/.tmux.conf`:
   ```
   set -g history-limit 50000
   ```
   Reload with `tmux kill-server`, or `tmux source-file ~/.tmux.conf` for new panes. Existing panes keep the old limit.
4. If copy-mode does not open, your tmux prefix is not the default. The toggle sends the default prefix followed by `[`; rebind tmux back to it, or enter copy-mode with your own prefix.

---

## Windows limitations

**Cause.** There is no tmux on native Windows, and the two mechanisms the helper uses to identify a running session -- reading a process's open file descriptors, and inspecting the process table -- are not available there either. The plugin detects the platform through the bridge and takes a reduced path deliberately rather than failing.

**What changes.**

- The launcher starts `omp` directly in a new tab or split. There is no persistent session, so closing the tab ends the agent.
- Copy-mode is unavailable and the **Scroll** button is disabled. Scrollback is whatever the host terminal offers a full-screen application, which is very little.
- `omp-bridge tmux-panes` returns an empty list by design.
- Workspace resolution has neither the tmux path nor `/proc`, so it relies on the working directory the renderer reports for the pane.
- Session detection falls back to the newest transcript for that workspace and accepts it only if it was written in the last 90 seconds. A session you left idle therefore drops back to inactive rather than showing numbers that stopped being true.

**Fix.**

Run Dinotty against WSL and work inside the Linux filesystem; everything behaves as it does on Linux. On native Windows, the Explorer, Skill Matrix and profile tabs work fully, and the HUD is accurate while you are actively using the agent.

---

## Skills or profiles do not show up

**Cause.** Both scanners swallow read errors and return what they found, so a missing or unreadable directory produces an empty list rather than an error.

**Fix.**

1. Confirm where the plugin is looking:
   ```sh
   node ./bin/omp-bridge doctor
   ```
   `ompHome` is the directory both scanners use. If it is wrong, set `PI_CODING_AGENT_DIR` and restart Dinotty.
2. Confirm the directories exist. Skills are read from `managed-skills` and `skills` inside that directory, plus `~/.agents/skills`:
   ```sh
   ls ~/.omp/agent/managed-skills ~/.omp/agent/skills ~/.agents/skills
   ```
3. A skill is indexed only if its directory contains `SKILL.md`; a directory without one is skipped.
4. A profile is discovered only if its filename matches `config.<name>.yml` or `config.<name>.yaml` directly inside the agent directory. Nested directories are not scanned.
5. The skill index is cached for 60 seconds. Switch tabs and come back, or reload, after adding one.

# OMP Pilot

A Dinotty plugin that makes the Oh My Pi (`omp`) coding agent a first-class citizen of the Dinotty terminal: a live per-tab HUD, a managed tmux launcher, a visual session and trace explorer, a skill matrix, and a profile switcher.

![CI](https://github.com/tickernelz/dinotty-omp/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-linux%20%7C%20macos%20%7C%20windows-lightgrey)

---

## What it does

`omp` is a terminal UI. Once it is running, everything it knows about itself -- which model is answering, which provider is billing you, how much context you have burned -- lives inside a full-screen TUI that you cannot read while you are doing something else, and that scrolls away the moment the screen redraws. OMP Pilot reads the same information out of the agent's own session transcripts and puts it where you can see it, while making the terminal itself behave like a terminal again.

| Feature | Description |
| --- | --- |
| Live Mini HUD overlay | A floating, draggable, collapsible panel pinned to the Dinotty window. Shows the model, thinking level, context tokens, session cost, agent status and assistant turn count for the terminal tab you are looking at. Collapses to a single summary line. |
| Status bar metric | Contributes an `OMP session cost` monitor series to the Dinotty status bar, rendering `OMP <model> <cost> USD`, with a detail panel listing model, provider, thinking level, status, context tokens, assistant turns, session cost and workspace. |
| Managed tmux launcher | Launches `omp` inside a persistent per-workspace tmux session so scrollback and copy-mode work. Detects tmux on the host first and falls back to launching `omp` directly when it is absent. |
| Tmux copy-mode toggle | Sends the tmux prefix followed by `[` to the active pane, dropping straight into copy-mode so you can scroll back and select text with the keyboard. Disabled, with an explanation, when the host has no tmux. |
| Session and Trace Explorer | A plugin tab that lists OMP session transcripts for one workspace or all of them, renders each turn as a card, collapses thinking blocks and tool calls, shows tool arguments and results, and renders images inline with a click-to-zoom lightbox. |
| Skill Matrix | Indexes every `SKILL.md` under the OMP managed-skills, project-skills and user-skills directories, offers search plus category filters, previews the skill body, and injects `/skill <name>` into the active terminal on one click. |
| Preset switcher | Discovers every `config.*.yml` profile in the OMP agent directory and launches any of them in a new tab, a vertical split, or a horizontal split. |

---

## Why

**1. A browser terminal cannot scroll an alternate-screen TUI.**

`omp` draws itself into the terminal's alternate screen buffer. The alternate screen has, by definition, no scrollback: there is nothing for the host to scroll to. On top of that, Dinotty pins the viewport to the bottom on every write and on every resize. The combined effect is that the conversation you just had becomes unreachable the instant it leaves the visible rows -- which is most of the time on a phone, where the visible rows are few.

Wrapping `omp` in tmux moves the problem to a layer that solves it. tmux keeps its own scrollback buffer per pane and provides copy-mode for navigating and selecting inside it, so your history survives the redraw and you can reach it from the keyboard. Set `history-limit` in your `~/.tmux.conf` (50000 is a comfortable value) to decide how much of it is kept.

**2. You cannot see what a tab is doing or what it is costing.**

With several tabs open, each potentially running a different profile against a different model, there is no way to tell them apart without attaching to each one and squinting at the TUI. The HUD and the status bar metric answer "which model, which profile, how much context, how much money, busy or idle" per tab, continuously, without stealing focus.

---

## Requirements

| Requirement | Notes |
| --- | --- |
| Dinotty | Any recent version with plugin support. |
| Node.js 20 or newer | Required to build the plugin and to run the bundled `omp-bridge` helper. |
| pnpm | Package manager used by this repository. |
| `omp` on `PATH` | The Oh My Pi CLI. The plugin launches it by name. |
| `tmux` | Optional, Linux and macOS only. Gives you scrollback and copy-mode. Without it the launcher starts `omp` directly and everything except copy-mode still works. |

---

## Install

### From source

```sh
git clone https://github.com/tickernelz/dinotty-omp.git
cd dinotty-omp
pnpm install
pnpm build
pnpm run link
```

`pnpm run link` creates a link from the Dinotty plugin directory to this checkout. It refuses to run if `dist/main.js` is missing, replaces an existing link, and refuses to overwrite a real directory. `pnpm run unlink` removes it again. Use `pnpm run link`, not `pnpm link`: the latter is pnpm's own workspace-linking command and would shadow the script.

A prebuilt `dist/` is committed to this repository. If you only want to use the plugin, copying or linking the folder into the plugin directory is enough -- no build, and no Node, required. The `pnpm install && pnpm build` steps above are the development path, and guarantee a bundle fresh from your checkout.

### Plugin directory locations

| Platform | Path |
| --- | --- |
| Linux | `~/.dinotty/plugins/dinotty-omp` |
| macOS | `~/.dinotty/plugins/dinotty-omp` |
| Windows | `%USERPROFILE%\.dinotty\plugins\dinotty-omp` |

To link by hand instead, from the repository root on POSIX:

```sh
mkdir -p ~/.dinotty/plugins
ln -sfn "$PWD" ~/.dinotty/plugins/dinotty-omp
```

Or in `cmd.exe` on Windows:

```bat
mklink /D "%USERPROFILE%\.dinotty\plugins\dinotty-omp" "%CD%"
```

`mklink /D` needs an elevated prompt, or Developer Mode enabled; the same applies to `pnpm run link` there. Copying the folder works just as well if you would rather not create a link.

Dinotty watches its plugin directory and picks the plugin up automatically. Reload the browser tab once after the first install so the host loads the new bundle.

---

## Usage

### Mini HUD

The HUD can be dragged by its header. The chevron button collapses it to a single line.

When a session is running it shows four chips, a status line, and three buttons:

| Chip | Meaning |
| --- | --- |
| Model | The model serving the session, shortened to its last path segment. Hover for the full identifier. |
| Thinking level | The agent's current thinking level. |
| Context tokens | Tokens currently in context, abbreviated. Hover for the exact number. |
| Cost | Accumulated session cost in USD. |

The status line repeats the agent state in words and counts assistant turns so far. **Explorer** opens the Session and Trace Explorer tab, **Scroll** enters tmux copy-mode in the active pane, and **Split** opens a split pane running OMP. **Scroll** is disabled when the host has no tmux.

The beacon next to the `OMP` wordmark reports what the tab is doing:

| Beacon | State | Meaning |
| --- | --- | --- |
| Grey | Inactive | No OMP session is attached to this tab. |
| Purple, pulsing | Starting | An agent process is alive but has not written its first turn yet. |
| Blue | Idle | A session is running and waiting for you. |
| Green, pulsing | Thinking | Your last message is being answered. |
| Amber, pulsing | Running tool | One or more tool calls are in flight. |
| Red | Error | The session reported an error state. |

When the tab has no session, the HUD offers a profile dropdown and a **Launch** button that runs `omp` in the active pane with the chosen profile.

### Command palette

| Command id | Title |
| --- | --- |
| `omp.quick-launch` | OMP: launch a profile in a new tab |
| `omp.split-launch` | OMP: launch a profile in a split pane |
| `omp.skill-palette` | OMP: search skills and inject one |
| `omp.open-session-viewer` | OMP: open the session explorer |
| `omp.tmux-copymode` | OMP: toggle tmux copy-mode |

The first three open a quick-pick list: profiles for the two launch commands, skills for the palette.

### Session and Trace Explorer

The **Sessions** tab lists transcripts newest first, with a filter box and a **This workspace only** toggle that switches between the active terminal's workspace and every workspace on the machine. Selecting one renders the turn stream:

- Header badges for model, tokens, session cost and entry count.
- A filter box that narrows turns by their text.
- **Copy** puts the whole transcript on the clipboard as Markdown.
- **Open** starts a new OMP tab in that session's workspace.
- Thinking blocks and tool calls are collapsed by default; expand a tool call to see its arguments and its result, with failed calls marked.
- Images attached to a turn render inline and open in a lightbox when clicked.
- A transcript larger than the host's file preview limit shows a banner saying so. The turns rendered are the first part of the file; the HUD's numbers remain exact, because they come from the bridge rather than the preview.

### Skill Matrix

The **Skills** tab indexes `SKILL.md` files from three roots -- managed skills and project skills inside the OMP agent directory, and your personal `~/.agents/skills` -- reading the name and description from each file's frontmatter. Skills are classified into `verification`, `diagnostics`, `delivery`, `authoring` and `general`, selectable as filter pills alongside `all`, and searchable by name or description. Selecting a card previews the full skill body; **Inject** sends `/skill <name>` to the active terminal. The index is cached for 60 seconds.

### Preset switcher

The **Profiles** tab lists the default profile plus every discovered one, each with its config path and three launch buttons: **New tab**, **Split right** and **Split down**. Launching a non-default profile starts `omp --config=<path to that profile>`. The header also carries a **New OMP tab** button for launching the profile selected there.

---

## Recommended shell integration

This section is **optional**. The plugin's own launcher already wraps `omp` in tmux for you; this only helps when you type `omp` by hand in a pane you opened yourself.

Add to `~/.zshrc` or `~/.bashrc`:

```sh
omp() {
  if [ -z "$TMUX" ] && { [ -n "$DINOTTY_PANE_ID" ] || [ "$TERM_PROGRAM" = "dinotty" ]; }; then
    session="omp-$(basename "$PWD" | sed 's/[^A-Za-z0-9_-]/_/g')"
    tmux new-session -A -s "$session" -c "$PWD" "command omp $*; exec \"$SHELL\""
  else
    command omp "$@"
  fi
}
```

It engages only inside Dinotty and only when you are not already inside tmux; everywhere else `command omp "$@"` runs the real binary untouched. The session naming matches what the plugin uses, so both paths attach to the same per-workspace session.

---

## Configuration

The plugin has no settings file. It asks the bridge where OMP lives, which is `$PI_CODING_AGENT_DIR` when that is set and `~/.omp/agent` otherwise, and scans that directory for files named `config.<name>.yml` or `config.<name>.yaml`. `config.yml` is always offered as the default profile. Add a profile by dropping a new config file there -- nothing needs to be registered.

The profile selected in the HUD dropdown is remembered in browser local storage under the key `dinotty-omp.preset`, so a tab reload keeps your last choice.

---

## Development

```sh
pnpm install       # install dev dependencies
pnpm build         # bundle to dist/main.js and dist/styles.css
pnpm dev           # same build, in watch mode
pnpm typecheck     # vue-tsc, no emit
pnpm check:bridge  # syntax-check bin/omp-bridge with node --check
pnpm run link      # link this checkout into the Dinotty plugin directory
pnpm run unlink    # remove that link
```

The bundle is built by Vite in library mode. `vue` is aliased to `src/shims/vue.ts`, which re-exports the host runtime from `window.__DINOTTY_VUE__`, so no second copy of Vue is shipped inside the plugin.

```
.
|-- bin/
|   |-- omp-bridge          Node ESM helper invoked through ctx.exec.run
|   `-- omp-bridge.cmd      Windows wrapper
|-- dist/                   committed build output (main.js, styles.css)
|-- scripts/
|   `-- link-plugin.mjs     backs pnpm run link and pnpm run unlink
|-- src/
|   |-- components/         shared UI pieces
|   |-- overlay/            MiniHudOverlay.vue
|   |-- services/           host, preset, session, skill, status and tmux logic
|   |-- shims/              host Vue runtime bridge
|   |-- types/              Dinotty plugin API types
|   |-- utils/              icon definitions
|   |-- views/              MainView.vue
|   `-- main.ts             activate() and the plugin contributions
|-- plugin.json             Dinotty manifest
|-- vite.config.ts
`-- tsconfig.json
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the browser side and the `omp-bridge` helper divide the work, and [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) when something does not light up.

---

## Platform support

| Feature | Linux | macOS | Windows |
| --- | --- | --- | --- |
| Mini HUD and status bar metric | Yes | Yes | Reduced, see below |
| Session and Trace Explorer | Yes | Yes | Yes |
| Skill Matrix | Yes | Yes | Yes |
| Preset switcher | Yes | Yes | Yes |
| Managed tmux launcher | Yes | Yes | No, launches `omp` directly |
| Tmux copy-mode toggle | Yes | Yes | No, the button is disabled |
| tmux pane listing | Yes | Yes | No, returns an empty list |

On native Windows there is no tmux, so the launcher starts `omp` directly and scrollback is whatever the host terminal provides for a full-screen application. Session detection also works differently: the helper cannot inspect a process's open files there, so it falls back to the newest transcript for the workspace and only trusts it if it was written in the last 90 seconds. An idle Windows session therefore drops back to inactive in the HUD rather than reporting stale numbers. Running Dinotty against WSL gets you the full Linux behaviour.

Images from a session are rendered in the Explorer tab rather than inline in the terminal: the host terminal does not bundle an image addon, so there is no way to draw them in the pane itself.

---

## License

MIT. See [LICENSE](LICENSE).

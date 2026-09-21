# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-21

### Added

- Live Mini HUD overlay: a draggable, collapsible floating panel showing the active model, thinking level, context tokens, session cost and assistant turn count for the current terminal tab, with a status beacon covering the inactive and starting pane states and the idle, thinking, running-tool and error agent states.
- HUD launch controls: a preset dropdown plus launch button shown when no OMP session is attached to the tab, with the last choice remembered in local storage.
- HUD quick actions: open the Session Explorer, enter tmux copy-mode, and launch OMP into a vertical split. The copy-mode action disables itself when the host has no tmux.
- Status bar metric: an `OMP session cost` monitor series contributing model and cost to the Dinotty status bar, with a detail panel for model, provider, thinking level, status, context tokens, assistant turns, session cost and workspace.
- Managed tmux launcher: wraps `omp` in a persistent per-workspace tmux session, detecting tmux on the host first and launching `omp` directly when it is absent or the host is Windows.
- Tmux copy-mode toggle, exposed both as a command and as a HUD button.
- Sessions tab: browse OMP JSONL transcripts for the current workspace or for every workspace, filter turns, expand thinking blocks and tool calls with their arguments and results, render images inline with a lightbox, open a session's workspace in a new terminal tab, and copy a transcript as Markdown. Transcripts beyond the host preview limit are flagged in place so partial rendering is never mistaken for the whole file.
- Skills tab: indexes `SKILL.md` files from the OMP managed-skills and user-skills directories, with search, filters for the verification, diagnostics, delivery, authoring and general categories, body preview, and one-click injection of `/skill <name>` into the active terminal.
- Profiles tab: discovers `config.*.yml` in the OMP agent directory, honouring `PI_CODING_AGENT_DIR`, and launches any profile in a new tab, a vertical split or a horizontal split.
- Command palette entries: `omp.quick-launch`, `omp.split-launch`, `omp.skill-palette`, `omp.open-session-viewer` and `omp.tmux-copymode`.
- `omp-bridge` helper: a Node CLI invoked through the host exec API that resolves a Dinotty pane to its workspace and to the transcript the live agent has open, and returns a parsed session summary as JSON. Supports the `pane`, `active`, `tmux-panes` and `doctor` actions, and ships with a Windows wrapper.
- Incremental metering: the helper caches running totals and a byte offset per transcript in the system temporary directory, so each poll reads only what was appended rather than re-reading a multi-megabyte file.
- Host detection through the bridge `doctor` action, cached for the session, so platform, OMP agent directory and tmux availability come from the host instead of browser sniffing, and every path is built from absolute directories rather than a tilde string.
- `pnpm run link` and `pnpm run unlink`: a cross-platform installer that links the checkout into the Dinotty plugin directory, refuses to clobber a real directory, and requires a built `dist/` first.

[1.0.0]: https://github.com/zhafron/dinotty-omp/releases/tag/v1.0.0

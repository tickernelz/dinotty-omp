---
name: Bug report
about: Something in OMP Pilot does not work as documented
title: ''
labels: bug
assignees: ''
---

## What happened

A clear description of the behaviour you observed.

## What you expected

What should have happened instead.

## Steps to reproduce

1.
2.
3.

## Affected surface

Which part of the plugin. Tick all that apply.

- [ ] Mini HUD overlay
- [ ] Status bar metric
- [ ] Managed tmux launcher
- [ ] Tmux copy-mode toggle
- [ ] Session and Trace Explorer
- [ ] Skill Matrix
- [ ] Preset switcher
- [ ] `omp-bridge` helper
- [ ] Install or loading

## Environment

| Field | Value |
| --- | --- |
| Dinotty version | |
| OS and version | |
| Node version (`node --version`) | |
| Plugin version (`version` in `plugin.json`) | |
| `omp` version | |
| tmux version, or none | |
| Running under WSL | yes / no |

## Bridge output

For anything involving the HUD, the status bar, or wrong metrics, run this in the plugin directory and paste the result:

```sh
node ./bin/omp-bridge active
```

```json

```

## Console errors

Any error naming `dinotty-omp` from the browser developer console.

```

```

## Additional context

Screenshots, config details, or anything else that helps. Do not paste API keys or the contents of a session transcript without reviewing it first.

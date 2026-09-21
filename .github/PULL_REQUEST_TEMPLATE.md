## Summary

What this change does, in a sentence or two, and why.

Closes #

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor with no behaviour change
- [ ] Documentation
- [ ] Build or CI

## Surfaces touched

- [ ] Mini HUD overlay
- [ ] Status bar metric
- [ ] Managed tmux launcher
- [ ] Session and Trace Explorer
- [ ] Skill Matrix
- [ ] Preset switcher
- [ ] `omp-bridge` helper
- [ ] Docs only

## How it was verified

Describe what you actually ran and observed. Screenshots welcome for UI changes.

| Field | Value |
| --- | --- |
| Dinotty version | |
| OS and version | |
| Node version (`node --version`) | |
| Plugin version (`version` in `plugin.json`) | |

## Checklist

- [ ] `pnpm typecheck` passes.
- [ ] `pnpm check:bridge` passes if `bin/omp-bridge` was touched.
- [ ] `pnpm build` was run and the rebuilt `dist/` is committed alongside the `src/` changes.
- [ ] Loaded in Dinotty and exercised the changed surface.
- [ ] Works, or degrades cleanly, on Linux, macOS and native Windows. Anything shelling out to tmux has a Windows path.
- [ ] No emoji anywhere in the diff.
- [ ] No comments added to source, beyond shebangs, license headers and pragmas.
- [ ] No absolute user paths; `~`, `$HOME` or `%USERPROFILE%` only.
- [ ] `README.md` updated if user-visible behaviour changed.
- [ ] `docs/ARCHITECTURE.md` updated if the bridge contract changed.
- [ ] `CHANGELOG.md` updated under an Unreleased heading if this is user-visible.
- [ ] Commits follow `type(scope): subject`, imperative, under 72 characters.

# Contributing

Thanks for taking the time. This is a small plugin with a few hard rules; read them before opening a pull request.

## Setup

```sh
git clone https://github.com/tickernelz/dinotty-omp.git
cd dinotty-omp
pnpm install
pnpm build
pnpm run link
```

`pnpm run link` links the checkout into the Dinotty plugin directory; `pnpm run unlink` removes it. Use `pnpm run link`, not `pnpm link`, which is pnpm's own command and would shadow the script. The script requires `dist/main.js` to exist, refuses to overwrite a real directory, and on Windows creates a junction -- if that fails with `EPERM`, enable Developer Mode, run the terminal elevated, or copy the folder into `%USERPROFILE%\.dinotty\plugins\dinotty-omp` instead.

While working, run `pnpm dev` for a watch build and reload the Dinotty browser tab to pick up a new bundle.

## House rules

**No emoji.** Not in source, not in markdown, not in commit messages, not in UI strings. Icons in the UI come from the icon component; use it instead of reaching for a pictograph.

**No comments in source.** Express intent through names and structure. A comment is acceptable only where it is structurally required: shebangs, license headers, type-checker pragmas, generated-file markers. Stale comments in lines you touch should be deleted, not rewritten.

**No hardcoded absolute paths.** Use `~`, `$HOME`, `%USERPROFILE%` or a path relative to the repository. A path with someone's username in it will not survive review.

**English only** in code, docs, commit messages and UI copy.

## Commits

Conventional Commits, imperative mood, subject under 72 characters:

```
type(scope): subject
```

Types in use: `feat`, `fix`, `docs`, `refactor`, `perf`, `chore`, `ci`. Scope is the area touched, for example `hud`, `bridge`, `explorer`, `skills`, `tmux`, `build`.

```
feat(hud): show provider chip next to the model chip
fix(bridge): fall back to /proc cwd when tmux has no client
```

## The dist/ rule

`dist/` is committed. Dinotty loads `plugin.json`'s `entry` directly out of the plugin directory and never runs a build step, so a clone dropped into the plugins directory must already contain a working bundle or the plugin fails to load.

That makes the rule simple: **any change under `src/` must be accompanied by `pnpm build` and the rebuilt `dist/` in the same commit.** A pull request that changes source without the matching bundle is incomplete. Do not hand-edit anything in `dist/`.

## Before you open a pull request

- `pnpm typecheck` passes.
- `pnpm check:bridge` passes if you touched `bin/omp-bridge`.
- `pnpm build` was run and `dist/` is staged alongside your source changes.
- You reloaded Dinotty and exercised the surface you changed.
- The change keeps the plugin working on Linux, macOS and Windows. tmux is Linux and macOS only, so anything that depends on it needs a path that degrades cleanly rather than throwing. Ask the bridge through `getHostInfo` instead of sniffing the browser for a platform, build paths with `joinHostPath` from the absolute directories the bridge reports rather than emitting a `~` string, and remember that `bin/omp-bridge` runs on all three platforms and must not assume `/proc`, `lsof` or a tmux server exists.
- Any user-visible change is reflected in `README.md`, and anything that changes the bridge contract is reflected in `docs/ARCHITECTURE.md`.

## Reporting bugs

Open an issue using the bug report template and fill in the Dinotty version, OS, Node version and plugin version. A HUD that shows the wrong thing is almost always a session-resolution problem; the output of the bridge for your pane is the single most useful attachment, and `docs/TROUBLESHOOTING.md` explains how to capture it.

## Releasing

Releases are driven entirely by a version tag. Nothing is published by hand.

1. Bump `version` in both `package.json` and `plugin.json` to the same value. CI fails the release if they disagree with the tag.
2. Run `pnpm build` and commit the regenerated `dist/`.
3. Commit, then tag and push:

```sh
git tag -a vX.Y.Z -m "OMP Pilot X.Y.Z"
git push origin main --follow-tags
```

The Release workflow then installs once, verifies the tag against both manifests, builds, publishes the npm package, zips the installable plugin folder, and attaches it to a generated GitHub release.

### npm provenance

Trusted Publishing is linked to this repository and the `release.yml` workflow, with both `npm publish` and `npm stage publish` permitted. The workflow grants `id-token: write`, so each release exchanges an OIDC token and attaches a provenance attestation; `NPM_TOKEN` remains only as a fallback.

Verify after any release:

```sh
npm view @tickernelz/dinotty-omp --json | node -e "let d=String.raw``;process.stdin.on('data',c=>d+=c).on('end',()=>console.log(Boolean(JSON.parse(d).dist.attestations)))"
```

The Trusted Publishing connection is immutable. Renaming `release.yml` means deleting the connection on npm and creating a new one.

# changelog

A very simple personal changelog site. Write markdown, push, it's live.

## Writing a new entry

Create a new file in `src/entries/YYYY/MM/`, named `YYYY-MM-DD-slug.md`
(the year/month subfolders are just to keep the source tree browsable —
they don't affect the URL, which is still `/entries/slug/`):

```md
---
title: Your entry title
date: 2026-08-13
---
Whatever you want, in markdown.
```

Then:

```bash
git add src/entries/2026/08/2026-08-13-slug.md
git commit -m "2026-08-13 slug"
git push
```

The site rebuilds and redeploys automatically via GitHub Actions, live within about a minute.

## Local preview

```bash
npm install
npm run serve
```

Opens at `http://localhost:8080`.

## One-time setup (already done if you're reading this after initial push)

1. Push this repo to GitHub (public repo, unless you're on GitHub Pro/Team).
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the `deploy.yml` workflow builds and publishes the site.

## Custom domain (changes.jumoo.co.uk)

The site is served from `https://changes.jumoo.co.uk` instead of the default
`github.io` URL. `src/CNAME` carries the domain through the build (Eleventy
copies it to `_site/CNAME`, which GitHub Pages reads on every deploy). To set
this up on a fresh repo:

1. **DNS**: in jumoo.co.uk's DNS provider, add a `CNAME` record:
   `changes` → `kevinjump.github.io`.
2. **GitHub**: repo **Settings → Pages → Custom domain**, enter
   `changes.jumoo.co.uk`, save. Wait for DNS check to go green, then tick
   **Enforce HTTPS**.
3. Push — `src/CNAME` keeps the setting in place across future deploys (GitHub
   would otherwise reset it if the artifact ever omitted the file).

## Notes

- No comments, no inline editing, no database — just markdown files and static HTML.
- Search is a small client-side filter over titles/bodies, no backend involved.

## `/changelog` Claude Code skill

This repo ships a Claude Code skill (`.claude/skills/changelog/`) that
generates and commits entries for you from any project — run `/changelog` at
the end of a work session and it drafts an entry from your recent
git/session activity, shows it to you, and commits it locally (it never
pushes without asking).

To use it from any repo (not just when Claude's cwd is this one), install it
as a personal skill:

```bash
# macOS/Linux
ln -s "$(pwd)/.claude/skills/changelog" ~/.claude/skills/changelog

# Windows (PowerShell, run as your own user)
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.claude\skills\changelog" -Target "$(Resolve-Path .claude\skills\changelog)"
```

Then set `CHANGELOG_REPO_DIR` in your shell profile to the path of **your**
clone of this repo, so the skill knows where to write entries regardless of
which project you run it from:

```bash
export CHANGELOG_REPO_DIR=/path/to/your/changelog/clone
```

The skill reads entry conventions from this repo's [CLAUDE.md](CLAUDE.md) —
if those conventions change, everyone picks up the update next run.

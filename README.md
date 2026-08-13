# changelog

A very simple personal changelog site. Write markdown, push, it's live.

## Writing a new entry

Create a new file in `src/entries/`, named `YYYY-MM-DD-slug.md`:

```md
---
title: Your entry title
date: 2026-08-13
---
Whatever you want, in markdown.
```

Then:

```bash
git add src/entries/2026-08-13-slug.md
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
3. Push to `main` — the `deploy.yml` workflow builds and publishes to `https://<username>.github.io/<repo>/`.

## Notes

- No comments, no inline editing, no database — just markdown files and static HTML.
- Search is a small client-side filter over titles/bodies, no backend involved.

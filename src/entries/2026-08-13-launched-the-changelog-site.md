---
title: Built and launched the changelog site
date: 2026-08-13T09:00:00
---
- Built this site: Eleventy static site generator, markdown entries with title+date frontmatter, chronological listing, tiny client-side search filter
- Deployed to GitHub Pages via GitHub Actions — push to main auto-builds and deploys
- Fixed a bug where the GitHub Pages project subpath (`/changelog/`) broke absolute asset/link paths — switched to Eleventy's `pathPrefix` + `url` filter
- Switched to a light color palette
- Added `CLAUDE.md` conventions doc and a `/changelog` Claude Code skill (works from any repo) to draft and commit future entries

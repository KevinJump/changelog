---
title: Built and launched the changelog site
date: 2026-08-13T09:00:00
---
**Repo:** [KevinJump/changelog](https://github.com/KevinJump/changelog)

- Built this site: Eleventy static site generator, markdown entries with title+date frontmatter, chronological listing, tiny client-side search filter
- Deployed to GitHub Pages via GitHub Actions — push to main auto-builds and deploys
- Fixed a bug where the GitHub Pages project subpath (`/changelog/`) broke absolute asset/link paths — switched to Eleventy's `pathPrefix` + `url` filter
- Added `CLAUDE.md` conventions doc and a `/changelog` Claude Code skill (works from any repo) to draft and commit future entries
- Moved the search box into the header, alongside the title
- Documented and applied a convention: link public resources mentioned in entries (NuGet packages, releases, docs, etc.), separate from the repo link
- Switched to a dark blue color palette and JetBrains Mono font — checked contrast against WCAG AA and retuned the muted text color (`#7d8eb5`) to keep a 5.8:1 ratio
- Grouped the entry list under date headings instead of repeating the date on every entry; search now hides a date heading when none of its entries match

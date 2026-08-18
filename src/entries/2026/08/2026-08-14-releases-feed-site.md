---
title: Built the Jumoo releases feed site
date: 2026-08-14T11:30:00
---

**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Built a static release-feed site for Jumoo's NuGet packages — fetches version data from the NuGet API and release notes from the GitHub Releases API (including private repos, via a scoped fine-grained PAT) and merges them into `releases.json` / an RSS feed
- Homepage groups packages into category sections with clickable cards, each linking through to a full per-package release history page
- Hosted on GitHub Pages at `releases.jumoo.co.uk`, regenerated every 6h by a GitHub Actions workflow (or manual dispatch)
- Restyled to match this changelog site's dark navy / JetBrains Mono theme

---
title: "Jumoo Releases: activity page for commits since last release"
date: 2026-08-22T09:47:00
---

**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Added an `activity.html` page listing, per package, commits since its last tagged GitHub release — a way to spot packages overdue a release.
- Fixed a subtlety: releases aren't always cut from a repo's default branch (e.g. Xliff Connector defaults to `v17/main` but shipped `v18.0.1` off `v18/main`) — the fetch script now resolves which mainline branch a release's tag actually sits on and diffs against that, instead of the repo default.
- Flags packages with no tagged GitHub releases separately as "no tagged releases".

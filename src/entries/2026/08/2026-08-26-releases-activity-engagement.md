---
title: "Jumoo Releases: engineering activity on the activity page"
date: 2026-08-26T20:00:00
---
**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Added an "At a glance" summary and an "Engineering activity" section (12-month issues/PRs/commits chart + per-package table) to the activity page
- New scripts/seed-engagement.mjs: one-off historical backfill of issues/PRs/commits per package per month, paginating full GitHub history
- New scripts/fetch-engagement.mjs: incremental refresh wired into the release workflow, recomputes a rolling 13-month window and replaces it wholesale each run to avoid double-counting reopened/updated issues
- Renamed the existing table to "Commit activity" and made both sections collapsible, matching the stats page

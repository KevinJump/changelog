---
title: "Changelog site: dated archive, collapsible months, entries reorg"
date: 2026-08-18T15:00:00
---
**Repo:** [KevinJump/changelog](https://github.com/KevinJump/changelog)

- Homepage now shows only the last 5 dates with entries, with a link to a new
  `/archive/` section
- Added `/archive/` (year index) and `/archive/YYYY/` (per-year pages),
  grouping entries by month — months are collapsible via native `<details>`
  — then by date
- Reorganized `src/entries/` into `YYYY/MM/` subfolders to keep the source
  tree browsable as it grows; public entry URLs unchanged
- Moved the archive/about nav links from the header into a second centered
  row in the footer

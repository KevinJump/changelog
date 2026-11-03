---
title: "Translation Manager: 19.0.0-beta02, memory performance, job name fixes"
date: 2026-11-03T17:08:00
---

- Released [`19.0.0-beta02`](https://www.nuget.org/packages/Jumoo.TranslationManager.Core/19.0.0-beta02), built on [`Jumoo.Processing 19.0.0-beta02`](https://www.nuget.org/packages/Jumoo.Processing/19.0.0-beta02)
- Nightlies now build towards an unreleased prerelease version
- Translation memory is queried in SQL so it scales to large tables, with new memory indexes, and carried forward to v18
- Long job names get truncated to fit the name column. The suggested job name keeps the page name when children are included
- Bundled connector minimums raised to their latest v17 releases. Props version bumped to 17.11.0

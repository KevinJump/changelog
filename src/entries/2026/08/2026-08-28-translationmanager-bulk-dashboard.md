---
title: "TranslationManager: bulk translation dashboard"
date: 2026-08-28T17:30:00
---

- TranslationManager (v17): added a bulk translation dashboard to the Content section - pick multiple content items via the standard document picker, optionally include children per item, validate they all resolve to one translation set, then send them into the existing create-job pipeline
- New GetBulkSelection API endpoint resolves picked root items + include-children into the flat content id list the pipeline already accepts; removed a dead v13-era int-based content-info endpoint it replaced
- Job-creation config step now shows an inline tag list of what's being sent when a job has more than one content item, so multi-node sends aren't a guessing game
- Opened PR for review (16 commits: endpoint, dashboard UI, several rounds of layout/styling fixes)

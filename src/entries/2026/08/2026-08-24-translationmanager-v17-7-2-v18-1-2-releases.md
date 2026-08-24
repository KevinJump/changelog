---
title: "Jumoo.TranslationManager: v17.7.2 and v18.1.2 releases"
date: 2026-08-24T21:30:00
---

- v18: bumped `Jumoo.TranslationManager.Microsoft` to 18.1.0, `Jumoo.TranslationManager.AI` to 18.1.1, and `Jumoo.Processing` to 18.1.0; full build + test pass green (153 unit, 78 integration tests)
- v18: audited v17/main vs v18/main for un-ported fixes — only the import-map duplicate-registration fix was outstanding, found it was already applied independently
- v18: bumped version to 18.1.2, updated CHANGELOG.md, tagged `release/v18.1.2`
- Published [`v18.1.2`](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.1.2) release notes (translation memory correctness fixes, job-cancel crash guard, provider-selection validation fix) and backfilled the missing [`v17.7.2`](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v17.7.2) changelog entry, both on the Issues repo
- Cleaned up ~14 merged/stale branches off the main repo's remote (old `v5`/`v6` main lines, absorbed `v11` feature branches, `shared/*`), fast-forwarded local `v17/main`

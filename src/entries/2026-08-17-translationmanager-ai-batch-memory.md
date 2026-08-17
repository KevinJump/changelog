---
title: TranslationManager.AI batch mode translation memory fix
date: 2026-08-17T16:53:00
---

**Repo:** [Jumoo/Jumoo.TranslationManager.AI](https://github.com/Jumoo/Jumoo.TranslationManager.AI)

- Fixed batch-mode translations never getting written to translation memory — the interactive path added memory entries after every AI response, but the batch path's result deserialization never did
- Traced it into Core's approval flow: node approval only *promotes* existing unapproved memory rows, it never creates them, so batch-translated content could never end up in memory no matter how the node was approved
- `AIBatchTranslatorBase.CheckBatch` now calls `PostTranslateJob` after a completed batch's results are written onto the job, mirroring the existing `PreTranslateJob` call on submission; PR [#30](https://github.com/Jumoo/Jumoo.TranslationManager.AI/pull/30) merged to `v18/main`

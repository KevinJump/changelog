---
title: TranslationManager translation memory fixes
date: 2026-08-17T16:50:00
---

- TranslationManager: fixed three translation memory bugs — approved memory could silently revert to pending when shared source text got re-translated by another node; editing one value on a node deleted memory for every other property on that node; and node approval failed to promote memory for shared text owned by a different node's reference
- Approval is now monotonic, edit-invalidation only removes memory rows that no longer match the node's current source text, and approval promotion also matches by content (source/target text) rather than relying solely on the stored node reference — threaded `SourceCulture` onto `TranslationNodeApprovedNotification` to make that content match precise
- Content-based approval matching is intentionally connector-blind (consistent with the pre-existing reference-based promotion) — documented as a deliberate tradeoff in `Memory/CLAUDE.md`, not a bug
- Added unit tests for the extracted pure logic; PR [#172](https://dev.azure.com/jumoo/Translations/_git/TranslationManager-Shared/pullrequest/172) merged to `v18/main`
- [Jumoo.TranslationManager.AI](https://github.com/Jumoo/Jumoo.TranslationManager.AI): fixed batch-mode translations never getting written to translation memory — the interactive path added memory entries after every AI response, but the batch path's result deserialization never did
- Traced it into Core's approval flow: node approval only *promotes* existing unapproved memory rows, it never creates them, so batch-translated content could never end up in memory no matter how the node was approved
- `AIBatchTranslatorBase.CheckBatch` now calls `PostTranslateJob` after a completed batch's results are written onto the job, mirroring the existing `PreTranslateJob` call on submission; PR [#30](https://github.com/Jumoo/Jumoo.TranslationManager.AI/pull/30) merged to `v18/main`

---
title: "Translation Manager: fixed uSync.Complete install conflict, released 17.8.2"
date: 2026-09-07T11:22:00
---

- Translation Manager: diagnosed a `400 - unrecognized type discriminator id 'TranslationProcessingOptions'` error hit when installed alongside uSync.Complete 17.4.0 — both packages depend on Jumoo.Processing, and a version pin mismatch (17.3.4 vs 17.4.0) meant two physical copies loaded, breaking its runtime polymorphic-type discriminator scan
- Fixed by aligning Translation Manager's Jumoo.Processing pin to 17.4.0 ([#28](https://github.com/Jumoo/Jumoo.TranslationManager/pull/28))
- Released [Translation Manager 17.8.2](https://www.nuget.org/packages/Jumoo.TranslationManager/17.8.2) — the uSync.Complete fix, a new clone-to-language action for untranslated variants, and a licence-checker user agent fix. Notes also on the [public changelog](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v17.8.2)
- Jumoo.Processing: wrote up the root cause (`PipelineTypeInfoResolver`'s runtime `ITypeFinder` scan is fragile to consumer packages loading different assembly copies) and a non-breaking fix design — opt-in explicit type registration alongside the existing scan ([#22](https://github.com/Jumoo/Jumoo.Processing/pull/22))
- Jumoo.Processing: corrected `CLAUDE.md` and `SECURITY.md` — they had the LTS/STS branch policy backwards (said v17/main was security-only; actually work is authored on v17/main and merged forward) ([#23](https://github.com/Jumoo/Jumoo.Processing/pull/23))

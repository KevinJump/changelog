---
title: "Translation Manager: explicit Processing options discriminator"
date: 2026-09-23T12:26:00
---

- Translation Manager: bumped Jumoo.Processing 17.4.0 → 17.4.2 (NuGet, plus the `@jumoo/processing` npm floor to `^17.4.2`)
- Translation Manager: `TranslationProcessingOptions` now carries `[ProcessingOptionsDiscriminator]` and is registered via `AddProcessingOptionsType<T>()` - serialization no longer depends on Processing's type scan, which missed it when uSync.Complete loaded a different Processing.Core version
- Translation Manager: discriminator kept as `TranslationProcessingOptions` so the backoffice `$type` and persisted pipelines still resolve; added a test that pins it
- Opened PR #79 on v17/main

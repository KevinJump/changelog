---
title: "Translation Manager: shipped v18.3.0, forward-port + pre-release checks"
date: 2026-09-14T10:00:00
---

**Repo:** [Jumoo/Jumoo.TranslationManager.Issues](https://github.com/Jumoo/Jumoo.TranslationManager.Issues)

- Translation Manager: checked v17/main → v18/main forward-port status — already in sync, nothing outstanding
- Translation Manager: triggered a manual pre-release build on v18/main to the nightly feed
- Translation Manager: confirmed all bundled connector NuGet pins (Google, Microsoft, Xliff, Passthrough, DeepL, AI) are already at their latest published versions
- Translation Manager: released [`v18.3.0`](https://github.com/Jumoo/Jumoo.TranslationManager/releases/tag/v18.3.0) — global Glossary, granular glossary/translation-memory permissions, retry-pipeline and correctness fixes forward-ported from v17; published customer-facing notes on the [Issues repo](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.3.0)
- Triggered a refresh of the releases.jumoo.co.uk feed after the release

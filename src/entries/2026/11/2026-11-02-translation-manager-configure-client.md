---
title: "Translation Manager: configureClient across core and connectors, Umbraco 19 prep"
date: 2026-11-02T13:00:00
---

- Core: backoffice client moved to `configureClient`
- Core: Umbraco 19 work. Block and picker changes handled, API client regenerated, Jumoo.Json bumped to 19.0.0-beta1, and custom conditions always answer
- Connectors: AI, CSV, DeepL, CrowdIn, SmartCat, LanguageWire, Xliff and TranslatePlus now authenticate with `configureClient`, with the API secured where it wasn't. Merged forward to v18
- GlobalLink: replaced the hand-written client with a generated one, and released [`17.1.3`](https://www.nuget.org/packages/Jumoo.TranslationManager.GlobalLink/17.1.3) and [`18.0.2`](https://www.nuget.org/packages/Jumoo.TranslationManager.GlobalLink/18.0.2)

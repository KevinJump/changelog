---
title: Translation Manager - RTE empty-markup crash fix
date: 2026-08-14T15:15:00
---

- Translation Manager: fixed a crash where an RTE property with empty markup (e.g. a block-only rich text value) came back from translation as `{"markup": null, ...}` instead of `{"markup": "", ...}`, making the node unopenable in the backoffice
- Fixed on both v17 (`v17.7.1`) and v18 (`v18.1.1`), same root cause in `HtmlDocumentMapper.GetSimpleTargetValue`
- Published [v18.1.1](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.1.1) and [v17.7.1](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v17.7.1) release notes, both to NuGet

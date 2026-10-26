---
title: "Translation Manager 17.10.0 and 18.4.0 released"
date: 2026-10-26T16:25:00
---

- Translation Manager: link updater fixes for separate-tree sets ([Issues#108](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/issues/108)). Multi URL Picker links were never remapped (an inverted check), and rich text links were missed because Umbraco 17 stores the RTE markup json-escaped inside its value. Both now map to the related page on the target site
- Translation Manager: the link updater logs each link it maps and why it leaves one unchanged, and has its first unit tests
- Translation Manager: bundled DeepL connector moved to 17.4.0; merged the Test SDK and vite dependabot PRs
- Released [`Jumoo.TranslationManager 17.10.0`](https://www.nuget.org/packages/Jumoo.TranslationManager/17.10.0) to NuGet and [`@jumoo/translate@17.10.0`](https://www.npmjs.com/package/@jumoo/translate/v/17.10.0) to npm (`latest-17`), with [public release notes](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v17.10.0)
- Translation Manager: forward-ported v17/main into v18/main (24 commits), moving v18 to Jumoo.Processing 18.3.0 so the background job fixes land in full. Merged with a merge commit
- Released [`Jumoo.TranslationManager 18.4.0`](https://www.nuget.org/packages/Jumoo.TranslationManager/18.4.0) to NuGet and [`@jumoo/translate@18.4.0`](https://www.npmjs.com/package/@jumoo/translate/v/18.4.0) to npm (`latest`), with [public release notes](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.4.0)

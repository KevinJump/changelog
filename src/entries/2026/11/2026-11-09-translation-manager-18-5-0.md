---
title: "Translation Manager 18.5.0"
date: 2026-11-09T10:14:00
---

- Released [`18.5.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.Core/18.5.0), carrying the 17.11.0 fixes into v18
- Bundled connector minimums raised to their latest v18 releases, so sites stop resolving older connectors
- `@jumoo/translate` npm package ships its full types again (missing in 18.3.2 and 18.4.0)
- v18 client generated with `throwOnError`, so failed API calls show an error instead of an empty result
- Fix for null RTE markup when the source markup is empty, PR open (#172)

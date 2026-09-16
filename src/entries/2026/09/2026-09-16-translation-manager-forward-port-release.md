---
title: "Translation Manager: forward-port v17 fixes into v18, cut 18.3.1"
date: 2026-09-16T15:00:00
---

- Forward-ported two v17 fixes into v18/main: `TranslationSetService`'s cached `TranslationSet.SiteIds` list grew a duplicate root-site entry on every `GetByContentKey` request (wrong culture compared in the dedup check), and the set-shaping helpers were mutating those same cached instances directly instead of a clone
- Merged v17/main into v18/main (PR #67), resolving conflicts in `CHANGELOG.md` and `SetsControllerBase.cs`
- Released [`v18.3.1`](https://www.nuget.org/packages/Jumoo.TranslationManager) to NuGet; published matching customer-facing notes on the [companion Issues repo](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.3.1)

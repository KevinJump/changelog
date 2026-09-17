---
title: "Translation Manager: fix SiteIds cache growth (17.9.1), forward-port to v18 (18.3.1)"
date: 2026-09-16T15:00:00
---

- Fixed the culture mismatch (PR #65) and made `OrderSetsAndSites`/`AddSiteDetails` clone the set before mutating it (PR #66), so per-request response shaping can no longer write back into the cache
- Released [`v17.9.1`](https://www.nuget.org/packages/Jumoo.TranslationManager) to NuGet; published customer-facing notes on the [companion Issues repo](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v17.9.1)
- Forward-ported both fixes into v18/main: merged v17/main into v18/main (PR #67), resolving conflicts in `CHANGELOG.md` and `SetsControllerBase.cs`
- Released [`v18.3.1`](https://www.nuget.org/packages/Jumoo.TranslationManager) to NuGet; published matching customer-facing notes on the [companion Issues repo](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.3.1)

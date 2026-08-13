---
title: uSync.Umbraco.Commerce tax class fix + 17.1.0 release
date: 2026-08-13T16:00:00
---

**Repo:** [Jumoo/uSync.Umbraco.Commerce](https://github.com/Jumoo/uSync.Umbraco.Commerce)

- Fixed country/region tax rates not being restored on import — the serializer wrote them under a `<TaxClasses>` element but read them back looking for `<TaxRates>`, so import always saw an empty list and wiped existing overrides instead of restoring them ([#10](https://github.com/Jumoo/uSync.Umbraco.Commerce/issues/10))
- Fixed the tax rate value itself round-tripping as 0% — it was serialized via `TaxRate.ToString()` ("20.00%") instead of the underlying decimal, which failed to parse back on import
- Fixed a related bug in `ShippingMethodSerializer` where a collection-diff compared the live country/region list against itself, so stale allowances never got removed on import
- Released [`17.1.0`](https://www.nuget.org/packages/uSync.Umbraco.Commerce/17.1.0) to NuGet — first non-rc release of the 17.x line — with a matching [GitHub release](https://github.com/Jumoo/uSync.Umbraco.Commerce/releases/tag/v17.1.0)
- Added `umbraco-marketplace.json` for the [Umbraco Marketplace](https://marketplace.umbraco.com) listing

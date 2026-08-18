---
title: uSync.Umbraco.Commerce — Umbraco 18 upgrade, repo standards, tax class fix + 17.1.0 release
date: 2026-08-13T15:38:00
---

**Repo:** [Jumoo/uSync.Umbraco.Commerce](https://github.com/Jumoo/uSync.Umbraco.Commerce)

- Upgraded to Umbraco 18 / Umbraco Commerce 18.1.0 on `v18/main` — pure package-version bump, no code changes needed
- Added repository standards (CODE_OF_CONDUCT, SECURITY, CHANGELOG, CLAUDE.md, editorconfig, Directory.Build.props, GitVersion, locked packages.lock.json) and GitHub Actions CI/CD (PR build, package build, NuGet trusted-publishing release, CodeQL) via [PR #11](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/11), merged
- Ported the same repo standards to the `v17/main` line via [PR #12](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/12), merged — 17.x-specific version numbers and lock file, code unchanged
- Verified both PRs' `dotnet-build.yml` checks actually ran and passed in CI, not just locally
- Fixed country/region tax rates not being restored on import — the serializer wrote them under a `<TaxClasses>` element but read them back looking for `<TaxRates>`, so import always saw an empty list and wiped existing overrides instead of restoring them ([#10](https://github.com/Jumoo/uSync.Umbraco.Commerce/issues/10))
- Fixed the tax rate value itself round-tripping as 0% — it was serialized via `TaxRate.ToString()` ("20.00%") instead of the underlying decimal, which failed to parse back on import
- Fixed a related bug in `ShippingMethodSerializer` where a collection-diff compared the live country/region list against itself, so stale allowances never got removed on import
- Released [`17.1.0`](https://www.nuget.org/packages/uSync.Umbraco.Commerce/17.1.0) to NuGet — first non-rc release of the 17.x line — with a matching [GitHub release](https://github.com/Jumoo/uSync.Umbraco.Commerce/releases/tag/v17.1.0)
- Added `umbraco-marketplace.json` for the [Umbraco Marketplace](https://marketplace.umbraco.com) listing

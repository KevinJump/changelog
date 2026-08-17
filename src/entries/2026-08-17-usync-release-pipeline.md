---
title: "uSync: automated nightly + release pipeline, v17.3.7 & v18.1.1 releases"
date: 2026-08-17T12:15:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Released [`v17.3.7`](https://github.com/KevinJump/uSync/releases/tag/v17.3.7) — save-attempt discard fixes, blueprint bulk-save fix, property-out-of-group import fix, perf tweaks
- Added a `publish-nightly` job to `package-build.yml` that pushes nightly builds to the Azure Artifacts feed on every push to v18/main (previously a manual `dotnet nuget push`)
- Nightly package versions now use `{major}.{minor}.{patch}-build.{date}.{run_number}` instead of GitVersion's own scheme
- Fixed `package-up` to build with `ContinuousIntegrationBuild=true`, matching `release.yml`, so nightly and release packages build the same way
- Added npm restore caching across all three GitHub Actions workflows
- Found and fixed two bugs in `release.yml`'s nuget push step (unexpanded glob, `$NUGET_API_KEY` referenced with bash syntax in a pwsh step) during the pipeline's first live run
- Added a required-reviewer approval gate to the `nuget` GitHub environment before it publishes
- Released [`v18.1.1`](https://www.nuget.org/packages/uSync/18.1.1) to NuGet — first release through the fixed automated pipeline, with a matching [GitHub Release](https://github.com/KevinJump/uSync/releases/tag/v18.1.1)

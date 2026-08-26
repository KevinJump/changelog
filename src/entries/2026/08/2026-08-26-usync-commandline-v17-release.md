---
title: "uSync.CommandLine: v17 migration and release"
date: 2026-08-26T18:00:00
---

**Repo:** [Jumoo/uSync.CommandLine](https://github.com/Jumoo/uSync.CommandLine)

- Migrated to Umbraco/uSync v17 (net10.0); regenerated the Management API client against a live v17 instance, fixing a breaking `Exception` type collision the new client surface introduced
- Added CI/CD (build, release, CodeQL workflows) with NuGet trusted publishing, plus dependabot config pinning Umbraco/uSync versions to deliberate bumps
- Added the missing MPL-2.0 LICENSE and fixed stale license/version metadata, matching the rest of the Jumoo OSS repos
- Switched the repo's default branch to v17/main
- Released [`v17.0.0`](https://www.nuget.org/packages/uSync.Cli/17.0.0) to NuGet (uSync.Cli + uSync.Command.Setup) and closed the v17-support tracking issue

---
title: "Jumoo.Processing: cancellation tokens, pipeline pruning, CI parity, and v17.4.0-rc1"
date: 2026-08-25T16:00:00
---

- Added `CancellationToken` overloads to `IPipelineService.Process` / `IProcessingService.ProcessAsync` (existing overloads obsoleted, removed in v20) so an aborted source request stops the target mid-step instead of running a full export to completion
- Indexed `Jumoo_Pipelines.Key` and added a recurring job to prune `Completed`/`Failed` rows — the table only ever grew before
- Ported v18/main's CI/CD pipeline and repo standards to v17/main: GitHub Actions (PR build, package build, tagged release), central package management with locked restores, two new test projects (41 tests total), npm workspaces for the backoffice assets, and the usual repo files (LICENSE, SECURITY, CODE_OF_CONDUCT, .editorconfig, etc.)
- Released [`v17.4.0-rc1`](https://www.nuget.org/packages/Jumoo.Processing) to NuGet — first real proof the ported pipeline works end to end

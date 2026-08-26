---
title: "Jumoo.Processing: pipeline cancellation, cache pruning, 18.1.1 release"
date: 2026-08-26T17:30:00
---

- Jumoo.Processing: ported cancellation token support forward from v17/main to v18/main — `IPipelineService.Process` and `IProcessingService.ProcessAsync` now accept a `CancellationToken` so an aborted source request can stop mid-step instead of running to completion (old overloads obsoleted, removed in v20)
- Jumoo.Processing: added a recurring job that prunes Completed/Failed rows from the pipeline cache table older than `KeepFinishedPipelinesForHours` (default 72h) — the table only ever grew before this
- Released [`18.1.1`](https://www.nuget.org/packages/Jumoo.Processing/18.1.1) to NuGet

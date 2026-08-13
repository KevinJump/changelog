---
title: uSync.Hangfire
date: 2026-08-13T14:30:00
---
**Repo:** [Jumoo/uSync.Hangfire](https://github.com/Jumoo/uSync.Hangfire)

- Four bugs found while porting `PublisherScheduler` into the Automate package, raised as issues and fixed: `PullContent`/`PullMedia` hardcoded the push strategy so pulls silently pushed, `PerformCommand` ignored its own `DependencyFlags` argument and forced children/media/ancestors on, `ProcessingScheduler` had no re-entrancy guard so concurrent jobs could race the same pipeline, and the daily restore-point jobs scheduled against the concrete `RestorePointScheduler` when only the interface is registered in DI
- Switched release publishing to NuGet trusted publishing; fixed the `dotnet nuget push` glob on Windows runners

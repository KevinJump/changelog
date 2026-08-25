---
title: "uSync: async callback surface on uSyncCallbacks, v17.3.8 release"
date: 2026-08-25T17:00:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Merged [#1049](https://github.com/KevinJump/uSync/pull/1049): added a non-breaking async callback surface to `uSyncCallbacks` (`CallbackAsync`, `UpdateAsync`, `SetRangeAsync`, `IncrementalUpdateAsync`, `CompleteAsync` + `Raise*Async` helpers) so consumers like uSync.Complete's SignalR hub clients can await a send instead of blocking with `.Wait()`
- v17/main is now the default/LTS branch — STS branches (v18/main etc.) are follow-on, merged forward from it
- Released [`v17.3.8`](https://github.com/KevinJump/uSync/releases/tag/v17.3.8) to [NuGet](https://www.nuget.org/packages/uSync)

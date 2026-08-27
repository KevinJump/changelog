---
title: "uSync: fixed and finished background processing mode (opt-in)"
date: 2026-08-27T15:10:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed the background sync path (`SyncProcessingMode.Background`): it was passing the run's requestId as the long-running-operation *type* (so the concurrency guard never worked) and returning an id the client could never use to check on the run
- Added `Status`/`Running` polling endpoints, backed by a per-run progress cache, so the client can poll progress and reattach to a run after a page reload
- Fixed export-to-file downloading before the export had actually finished writing
- Fixed a shared `Stopwatch` in `SyncActionService` that made elapsed-time logging a cross-run/cross-user race
- Diagnosed and fixed a self-inflicted SQLite `'table is locked'` issue: fixed-interval status polling was itself enough concurrent DB traffic to trigger it during a background import; polling is now a SignalR fallback only, with backoff
- Fixed status polling to be staleness-aware - a crashed/restarted server used to leave the client stuck reporting "running" forever; now self-heals within a few minutes, plus a manual dismiss button in the UI as an immediate escape hatch
- Kept `ProcessingMode` defaulted to `Normal` (opt-in only, not a default change mid-version); gave the new `ISyncManagementService` members default interface implementations so it stays non-breaking for external implementers
- Merged via [PR #1054](https://github.com/KevinJump/uSync/pull/1054)

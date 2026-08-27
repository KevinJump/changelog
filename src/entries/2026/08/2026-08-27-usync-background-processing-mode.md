---
title: "uSync: fixed and finished background processing mode (opt-in), then added load-balanced backoffice support"
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
- Made background processing mode work correctly behind a load-balanced backoffice: progress/status now resolves from any server via the shared long-running-operation record, not just the one that ran the job
- Fixed the client's polling fallback - it used to only kick in when the SignalR socket was fully disconnected, so a socket pinned to the wrong server (no sticky sessions) left the UI hung on a finished run; now it falls back based on message liveness instead
- Fixed the startup import running concurrently on every server under a load-balanced setup - its only guard assumed a role that topology doesn't use; now elects a single server via the long-running-operation service instead
- Tightened the background-mode poll interval from 5s to 1s now that polling is gated on liveness rather than being the sole progress mechanism
- Surfaced a progress message during polling fallback too - it previously only ever came from a live SignalR push, so the message line stayed blank whenever polling was doing the work
- Open as [PR #1055](https://github.com/KevinJump/uSync/pull/1055)

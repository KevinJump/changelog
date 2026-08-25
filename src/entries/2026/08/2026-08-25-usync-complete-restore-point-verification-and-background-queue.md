---
title: "uSync.Complete: restore point verification and dedicated background queue"
date: 2026-08-25T15:30:00
---

- Verified PR 178's restore point fix end-to-end on two live sites — push-with-restore-point, restore from a new-style archive, and the changed defaults (RestorePointIncludeMedia off, RestoreGroups defaulting to All) all work as expected
- Added ISyncBackgroundTaskQueue / SyncQueuedHostedService, a dedicated background queue for uSync so restore point compression and cache saves no longer share (and block on) Umbraco's own IBackgroundTaskQueue

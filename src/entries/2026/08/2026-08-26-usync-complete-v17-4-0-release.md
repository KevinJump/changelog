---
title: "uSync.Complete: v17.4.0 and v18.1.1 releases"
date: 2026-08-26T16:00:00
---

- Updated CHANGELOG.md for the v17.4.0 release (restore point live progress, dedicated background queue, uSync 17.3.8 / Jumoo.Processing 17.4.0 bump)
- Published the [v17.4.0 release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.4.0) on the public issue tracker, covering everything since v17.3.6 (17.3.9-17.3.11 patch releases plus the new work)
- Bumped uSync to 18.1.2 and Jumoo.Processing to 18.1.1 on v18/main: wired the new async `uSyncCallbacks` delegates in Publisher's SignalR progress hooks, and threaded a `CancellationToken` through `CreateRestorePoint` into the pipeline call
- Published the [v18.1.1 release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v18.1.1) on the public issue tracker, and tagged v18.1.1 in the repo

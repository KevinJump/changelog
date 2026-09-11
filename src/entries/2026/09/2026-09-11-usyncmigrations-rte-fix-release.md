---
title: "uSync.Migrations: fixed RTE import crash, released v17.0.3"
date: 2026-09-11T14:15:00
---

**Repo:** [Jumoo/uSyncMigrations](https://github.com/Jumoo/uSyncMigrations)

- Fixed `MacroRTEConfigSerializer` throwing `JsonException` on datatypes whose `blocks` config
  serialized to an empty/whitespace string (`Umbraco.TinyMCE`, stock `RichtextEditor.config`) —
  this was aborting every RTE datatype import and cascading into dropped RTE properties on
  content types ([#330](https://github.com/Jumoo/uSyncMigrations/issues/330))
- Backfilled a missing 17.0.2 changelog entry that had been sitting under "Unreleased"
- Released [`v17.0.3`](https://github.com/Jumoo/uSyncMigrations/releases/tag/v17.0.3) to NuGet

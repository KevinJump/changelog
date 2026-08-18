---
title: uSync blueprint bulk-save fix, backported to v17
date: 2026-08-14T16:00:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Merged [#1035](https://github.com/KevinJump/uSync/pull/1035): `ContentTemplateSerializer` now saves blueprints via `SaveBlueprint` on the bulk save path too, not just the single-item path — the bulk path was persisting through `IContentService.Save`, which rewrote a blueprint's node object type to `Document` and broke re-imports with a duplicate key error
- Backported the fix to `v17/main` in [#1037](https://github.com/KevinJump/uSync/pull/1037), referencing [#1034](https://github.com/KevinJump/uSync/issues/1034)

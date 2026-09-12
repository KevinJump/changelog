---
title: "uSync: v17→v18 forward port, prerelease workflow rename"
date: 2026-09-12T08:15:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Forward-ported v17's configurable bad-filename blocklist (`AdditionalBadNames`/
  `IncludeWindowsReservedNames` on `uSyncSettings`) into v18/main via [#1086](https://github.com/KevinJump/uSync/pull/1086)
- Renamed v18's `package-build.yml` to `prerelease.yml` and switched it to a manual
  `workflow_dispatch` trigger only, referencing v17's #1082 — [#1087](https://github.com/KevinJump/uSync/pull/1087)
- Reviewed the same bad-filename-blocklist change on [#1085](https://github.com/KevinJump/uSync/pull/1085) (v17/main)
  and [#1084](https://github.com/KevinJump/uSync/pull/1084) (v13/dev) — both mergeable, no blockers

---
title: "uSync: Umbraco 17.7.0 readiness review"
date: 2026-09-07T13:20:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Reviewed the upcoming Umbraco 17.7.0 release (160 commits since 17.6.2) against uSync's current behaviour
- Found three things that need work: the `MovePropertyType(alias, null)` core bug (#1009) is fixed upstream, so our workaround's test needs rewriting; migration plan cache-rebuild flag no longer leaks into `uSync_FirstBoot` on upgrade paths, which may leave the published cache stale; culture code casing is now normalized on save, which could shift export output and needs checking
- Opened [KevinJump/uSync#1067](https://github.com/KevinJump/uSync/issues/1067) with checkpoints for all three, plus a table of ten other reviewed-but-fine changes

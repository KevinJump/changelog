---
title: "uSync: added release workflow, cut v17.4.0"
date: 2026-09-08T15:15:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- v17 had no tag-triggered NuGet release workflow (only nightly-feed packaging and PR build/test) — ported `release.yml` from v18/main, adjusted for v17's unpinned `global.json` ([PR #1080](https://github.com/KevinJump/uSync/pull/1080))
- Cut a test release `v17.4.0-alpha` to prove the pipeline end to end (tag → build → pack → NuGet trusted publishing), then kept it as a real prerelease on NuGet
- Released [`v17.4.0`](https://github.com/KevinJump/uSync/releases/tag/v17.4.0) — background processing mode (opt-in, with load-balanced backoffice support), a structured diff view for JSON/block property changes, revived `uSync.Community.DataTypeSerializers`, and cross-platform path/filename fixes

---
title: "uSync: clean respects import rules, v17.4.2 release"
date: 2026-09-15T12:38:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed 'clean' delete-missing-items ignoring handler import rules (e.g. `ExcludeContentTypes`) — a partial sync from uSync.Publisher could delete items it never sent ([#1092](https://github.com/KevinJump/uSync/pull/1092))
- Reviewed and merged [#1089](https://github.com/KevinJump/uSync/pull/1089) (honour `ExportAtStartup` group) and [#1091](https://github.com/KevinJump/uSync/pull/1091) (build History client assets before packaging)
- Triggered a nightly pre-release build from `v17/main`
- Released [`v17.4.2`](https://github.com/KevinJump/uSync/releases/tag/v17.4.2) to NuGet

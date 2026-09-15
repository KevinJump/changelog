---
title: "uSync: forward-port v17→v18, CI parity, v17.4.2 and v18.1.4 releases"
date: 2026-09-15T12:38:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed 'clean' delete-missing-items ignoring handler import rules (e.g. `ExcludeContentTypes`) — a partial sync from uSync.Publisher could delete items it never sent ([#1092](https://github.com/KevinJump/uSync/pull/1092))
- Reviewed and merged [#1089](https://github.com/KevinJump/uSync/pull/1089) (honour `ExportAtStartup` group) and [#1091](https://github.com/KevinJump/uSync/pull/1091) (build History client assets before packaging)
- Triggered a nightly pre-release build from `v17/main`
- Released [`v17.4.2`](https://github.com/KevinJump/uSync/releases/tag/v17.4.2) to NuGet
- Forward-ported v17's #1089 (honour `ExportAtStartup` group), #1092 (clean respects import rules), and #1091's History-client CI build to v18, as [#1094](https://github.com/KevinJump/uSync/pull/1094), [#1095](https://github.com/KevinJump/uSync/pull/1095), and [#1093](https://github.com/KevinJump/uSync/pull/1093)
- Brought v17's and v18's CI workflows into parity (action versions, `global.json` SDK pinning, restructured nightly-build pipeline) — [#1096](https://github.com/KevinJump/uSync/pull/1096)
- Triggered pre-release builds on both branches to confirm the CI changes work end-to-end
- Released [`v18.1.4`](https://github.com/KevinJump/uSync/releases/tag/v18.1.4) to NuGet

---
title: "uSync: Include-path export pruning, issue sweep, v17 → v19 forward-ports"
date: 2026-10-30T17:30:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- uSync: export all skips content/media outside the `Include`/`Exclude` paths before serializing, and doesn't walk branches that can't match ([#1176](https://github.com/KevinJump/uSync/pull/1176), closes [#563](https://github.com/KevinJump/uSync/issues/563))
- uSync: regression tests for CreateOnly content in reports ([#1175](https://github.com/KevinJump/uSync/pull/1175)), tab alias clashes and line endings ([#1179](https://github.com/KevinJump/uSync/pull/1179))
- uSync: merged dependabot bumps on v17 (SourceLink 10.0.403, actions/checkout v7, vite 8.3.5)
- uSync: forward-ported v17 → v18 → v19 ([#1173](https://github.com/KevinJump/uSync/pull/1173), [#1174](https://github.com/KevinJump/uSync/pull/1174), [#1177](https://github.com/KevinJump/uSync/pull/1177), [#1178](https://github.com/KevinJump/uSync/pull/1178))
- uSync: closed [#640](https://github.com/KevinJump/uSync/issues/640) (pointed at `ISyncService.ExportSingleItem`), [#909](https://github.com/KevinJump/uSync/issues/909) (fixed in uSync.Complete 17.3.4), [#882](https://github.com/KevinJump/uSync/issues/882) and [#495](https://github.com/KevinJump/uSync/issues/495) (both fixed on v17)

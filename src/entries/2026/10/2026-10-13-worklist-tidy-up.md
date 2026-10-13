---
title: "Worklist tidy-up: connectors, community PRs, forward ports"
date: 2026-10-13T11:12:00
---

- Xliff connector: pushed the stray v17 changelog fix and merged it (#28)
- LanguageWire connector: ported the template-lock fix from the stray `main` branch to v17 (#22). Only the `pending.view.ts` half, since v17's config view has been rewritten. Discarded a stray lock-file change
- Lionbridge connector: removed an unused, untracked `logos/` folder
- uSync.Umbraco.Commerce: closed three stale v12/dev PRs ([#8](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/8), [#6](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/6), [#5](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/5))
- uSync: merged [#1022](https://github.com/KevinJump/uSync/pull/1022), `Clear(key)` instead of the prefix-scanning `ClearByKey` for exact-key cache removal, and merged the v17 port ([#1117](https://github.com/KevinJump/uSync/pull/1117))
- uSync: closed the old notification-suppression PR [#611](https://github.com/KevinJump/uSync/pull/611) and the MergeStrategy draft [#855](https://github.com/KevinJump/uSync/pull/855)
- Jumoo.Json: merged v17 forward to v18 ([#29](https://github.com/Jumoo/Jumoo.Json/pull/29)). `TryGetValueAs` was already there
- Jumoo.Processing: merged v17 forward to v18 (#44), bringing npmjs.org trusted publishing and tag-walk nightly versions to v18
- uSync.Complete v13: closed the background restore-point compression experiment (#32) and tidied the v13 folder back to `v13/main`
- MaintenanceMode: opened issues for #79 review, dependabot triage and the v18.1.0 release

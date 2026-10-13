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
- Released [Passthrough connector 18.0.1](https://www.nuget.org/packages/Jumoo.TranslationManager.Passthrough/18.0.1) to NuGet: composer backoffice gate, plus v17 repo standards and CI carried over to the 18 line
- Released [Microsoft connector 18.2.1](https://www.nuget.org/packages/Jumoo.TranslationManager.Microsoft/18.2.1) to NuGet: composer backoffice gate
- Released [CrowdIn connector 18.1.0](https://www.nuget.org/packages/Jumoo.TranslationManager.Crowdin/18.1.0) to NuGet: `IOptionsTranslationProvider` support (access token withheld at partial detail) and composer backoffice gate. Now needs Translation Manager 18.2.0
- Release worklist (#90): corrected MaintenanceMode to 18.2.0 and Jumoo.Json to 17.0.3/18.0.4, because the planned versions were already on NuGet untagged. TranslatePlus on hold pending feedback
- uSync: merged community PR [#1118](https://github.com/KevinJump/uSync/pull/1118) (v13). Content import ordering packed level and sort order as `level * 1000 + sortOrder`, so a node with 1000+ siblings could be imported before its parent and get mis-parented. Now sorts by level, then sort order
- uSync: ported it to v17 ([#1119](https://github.com/KevinJump/uSync/pull/1119)). `TemplateHandler` relied on the packed value (`Level > 1000` meant "not a root template"), so that check is now `Level > 1`
- uSync: merged v17 forward to v18 ([#1120](https://github.com/KevinJump/uSync/pull/1120)): #1119, #1117, #1116, #1114 and the Playwright E2E tests. Settings defaults set to `uSync/v18/`, and the API client regenerated from the v18 swagger

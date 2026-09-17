---
title: "uSync.Complete: member push/pull, safer server sync, and v17.4.3 release"
date: 2026-09-17T09:00:00
---

- uSync.Complete: added push/pull menu actions for Members and Member Groups (previously only doctypes, data types, and other settings entities had them) — server-side support already existed, just needed the client-side entity action manifest wiring plus IMember/IMemberGroup localization labels
- uSync.Complete: merged the change as PR #67 and triggered a nightly pre-release build
- uSync.Publisher: Sync Servers action now opens a multi-select server-picker dialog so you can choose which servers to push settings to, instead of always syncing every configured server
- uSync.Publisher: fixed PushSettings sending only the target servers as the settings payload — the receiving server treated that as the definitive list and deleted every other server it knew about, so syncing to just one server wiped the rest
- uSync.Complete: merged 5 dependabot PRs (vite bumps across the 4 client packages, Microsoft.NET.Test.Sdk)
- uSync.Complete: cut release v17.4.3, published to NuGet and wrote public [release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.4.3)

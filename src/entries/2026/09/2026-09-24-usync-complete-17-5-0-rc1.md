---
title: "uSync.Complete: 17.5.0-rc1"
date: 2026-09-24T12:16:00
---

- uSync.Complete: stopped Publisher asking the `__default__` settings server for capabilities. Requests to an unsaved server now use the target's own url (#94)
- uSync.Complete: merged the four dependabot npm updates for the client assets
- uSync.Complete: added the new-server appearance defaults (#88) and the restore point paging fix (#89) to the 17.5.0 changelog
- Released [`17.5.0-rc1`](https://www.nuget.org/packages/uSync.Complete/17.5.0-rc1) to NuGet as a prerelease
- Published customer notes for [v17.5.0-rc1](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.5.0-rc1), with a load-balanced sites section covering server affinity, a shared working folder, and when to turn off server-to-server SignalR

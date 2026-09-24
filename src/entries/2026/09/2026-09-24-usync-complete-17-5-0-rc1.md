---
title: "uSync.Complete: 17.5.0-rc1"
date: 2026-09-24T12:16:00
---

- uSync.Complete: stopped Publisher asking the `__default__` settings server for capabilities. Requests to an unsaved server now use the target's own url (#94)
- uSync.Complete: merged the four dependabot npm updates for the client assets
- uSync.Complete: added the new-server appearance defaults (#88) and the restore point paging fix (#89) to the 17.5.0 changelog
- Released [`17.5.0-rc1`](https://www.nuget.org/packages/uSync.Complete/17.5.0-rc1) to NuGet as a prerelease
- Published customer notes for [v17.5.0-rc1](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.5.0-rc1), with a load-balanced sites section covering server affinity, a shared working folder, and when to turn off server-to-server SignalR
- uSync.Complete: clicking the server identifier badge in the backoffice header now opens a popover listing connected servers, each with a live status check, host name, and a link that opens the same backoffice page on that server in a new tab (#96)
- uSync.Complete: added a "Server details" sidebar from the popover, with this server's alias, url and publisher, plus each connected server's description, status and check failure message (#96)

---
title: "uSync.Complete: Publisher packs in parts, TimeMachine, server json, localisation fixes"
date: 2026-09-25T09:31:00
---

- uSync.Complete: Publisher push and pull now send the sync pack between servers in parts, rather than as one zip in a single request that could run past `RequestTimeout` on large pulls
- New `PackChunkSize` (files, default 1000) and `PackChunkMaxBytes` (default 100MB) settings; a part closes at whichever limit comes first, and 0 turns a limit off
- Still works with older servers in either direction: an old remote sends the whole pack without the part header, and an old caller never asks for parts
- Pull fetch now reports progress, including the remote's packing progress passed back over the server-to-server hub
- Exporter downloads are zipped to disk and served from a file stream, rather than built in a `MemoryStream`, which can't hold more than 2GB
- Tested end to end on a local Source/Target pair with `PackChunkSize: 10`: settings push and pull both went as 11 parts and came back together
- Merged #100 (pack parts) and #99 (uSync.TimeMachine timeline and rollback) into `v17/main`; nightly `17.5.0-prerelease.30` has both
- Publisher: added missing item type labels (`IDomain`, `IRelationType`, `IWebhook`, `IUser`, `IUserGroup`); domain changes were showing the raw `usyncpublish_IDomain` key (#101)
- Publisher: brought back the v13 "Server json" footer link on the servers dashboard, which shows the server setup as json to save as `usync-servers.json` and seed servers on a new install; the backend was already there (#102)
- Fixed 22 typos across the Publisher, Expansions, Exporter and Snapshots language files, including a broken `<>` tag in the partial-unpublish warning; misspelt keys left as-is (#103)
- Found while testing 17.5 on a Source/Target pair: a push reported success when the target's import had failed on missing doctypes; not fixed yet

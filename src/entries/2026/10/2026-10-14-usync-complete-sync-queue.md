---
title: "uSync.Complete: Publisher Sync Queue"
date: 2026-10-14T15:35:00
---

- uSync.Complete: added the Publisher Sync Queue (#161, into 17.6.0) - per-user queue of items to push together later, off by default, turned on per server with "Allow queuing"
- "Add to queue" on item action menus, the content editor's push menu and the content/media browser dashboards; only shows when a server the user can push to allows it, read from the cached server list so no extra requests
- new Sync Queue dashboard in Content: one table with type, path, per-item include children; footer has count, Clear queue, Remove selected, Push selected; refreshes live when items are added elsewhere
- pushes the selection through the existing push dialog in one run, mixed types included (target import orders settings before content); file items get their own run; media keeps include-ancestors per item
- items only leave the queue when the push reaches its result step with no failed actions
- updated #154 (17.6.0 forward into main) to include the Sync Queue

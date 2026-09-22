---
title: uSync.Complete Publisher browser & server identifier
date: 2026-09-22T20:33:00
---

- Added a list view (alongside the existing card grid) to the Publisher content/media browser, with a sortable status badge showing in-sync/missing/out-of-sync per item
- Fixed a bug where the sync status badge always mirrored the first item's status for every row — the API returns `udi` as a plain string, not the object shape the generated client type implied, so `.uriValue` comparisons always compared `undefined` to `undefined`
- Added a pager to the browser (the API already returned total/page count, but the client silently truncated folders over 50 items)
- Added server-side sorting (Name/Type/Update) and a debounced folder-scoped search, threaded additively through the server-to-server HMAC-signed browsing calls so mismatched client/server versions degrade gracefully instead of breaking
- Dashboard now restores server/folder/page from the URL on refresh (view mode/sort/search reset fresh)
- Shipped as PR #83 (merged) and PR #84 (open) against v17/17.5.0
- Added an optional header badge showing the current server's icon, name and colour, so editors can tell which server they're logged into — gated by a new per-server "show server identifier" toggle (off by default)
- Added a separate "apply server colour to navbar" toggle (on by default, matching prior behaviour) so the navbar colour can be decoupled from the identifier badge
- The default/local server shows as "Local" with the uSync logo instead of its own icon
- Fixed a bug where saving server settings with the navbar-colour toggle off still applied the colour to the navbar until a page refresh
- Shipped as PR #85 (merged) against v17/17.5.0

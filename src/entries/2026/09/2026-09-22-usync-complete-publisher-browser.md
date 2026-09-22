---
title: uSync.Complete Publisher browser improvements
date: 2026-09-22T20:33:00
---

- Added a list view (alongside the existing card grid) to the Publisher content/media browser, with a sortable status badge showing in-sync/missing/out-of-sync per item
- Fixed a bug where the sync status badge always mirrored the first item's status for every row — the API returns `udi` as a plain string, not the object shape the generated client type implied, so `.uriValue` comparisons always compared `undefined` to `undefined`
- Added a pager to the browser (the API already returned total/page count, but the client silently truncated folders over 50 items)
- Added server-side sorting (Name/Type/Update) and a debounced folder-scoped search, threaded additively through the server-to-server HMAC-signed browsing calls so mismatched client/server versions degrade gracefully instead of breaking
- Dashboard now restores server/folder/page from the URL on refresh (view mode/sort/search reset fresh)
- Shipped as PR #83 (merged) and PR #84 (open) against v17/17.5.0

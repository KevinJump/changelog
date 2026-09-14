---
title: "uSync.Complete: performance audit and 21 merged PRs"
date: 2026-09-12T19:40:00
---

- uSync.Complete: performance audit across Expansions.Core, Publisher and Exporter — 38 findings, 21 PRs merged into v17/main
- Dependency calculation: HashSet instead of List for membership (was O(n²) on large syncs), and one GetDescendants + in-memory tree walk instead of a query per node
- Removed an exception thrown and caught for every content/media item during dependency calculation — GetUdi() never succeeds for entity slims, so it threw every time
- Publisher: pull responses stream instead of being copied into a second byte array
- Required media/file lists now fetched once per push action instead of once per page
- Item browser: batched HasChildren, 51 queries per page down to 2
- Pack file IO: cheaper hashing, streamed file comparison, Fastest zip compression, deduped directory creation on unpack; queue deletes in one statement instead of one per row
- Fixed three bugs found on the way: paged file push re-sent every file each page, renamed-media list overwritten per page, multi-pattern file replacements clobbering each other
- Added a background job to sweep abandoned pack/receive temp folders; removed two Publisher health checks dead since the Umbraco 14 backoffice rewrite
- Verified the merged set with a real Source→Target push: 150 items, no failures

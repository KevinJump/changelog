---
title: "uSync.Complete: v17.4.2 release"
date: 2026-09-14T16:31:00
---

- Bumped uSync core dependencies to 17.4.1
- Cut the v17.4.2 release: paged file push no longer resending the whole file set per
  page, media rename cleanup on import, multi-pattern file replacement collision fix,
  PushFiles large-upload handling, plus a batch of sync/export performance work
  (fewer DB queries, less buffering, cheaper hashing/zip)
- Released `release/v17.4.2` and published customer-facing notes to the
  uSync.Complete.Issues repo

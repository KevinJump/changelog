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
- Forward-ported v17/main into v18/main (PR #60): the v17.4.2 fixes/perf batch
  above, the temp-folder cleanup job, and dependency bumps; bumped v18's own
  uSync pins to 18.1.3 and renamed package-build.yml to prerelease.yml
  (manual-trigger only) so v18 prereleases can be triggered on demand too

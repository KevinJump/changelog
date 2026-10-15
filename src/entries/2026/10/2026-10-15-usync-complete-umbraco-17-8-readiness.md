---
title: "uSync.Complete: Umbraco 17.8 readiness fixes"
date: 2026-10-15T14:20:00
---

- uSync.Complete: Publisher matches the current server on host, port and path, ignoring scheme and case, so it still matches when 17.8 upgrades the application URL to https after the first request
- uSync.Complete: moved the Restore points page body into a workspace view (the workspace editor's default slot is deprecated in 17.8)
- uSync.Complete: Push, Pull and Add to Sync Queue grouped with the new entity action `separatorBefore`
- uSync.Complete: push no longer goes ahead with the old version when save and publish is cancelled at the variant picker
- Merged all four into v17/17.6.0 for the next release

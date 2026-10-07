---
title: "uSync.Complete: push button permissions"
date: 2026-10-07T11:39:00
---

- uSync.Complete: the push and pull buttons now check the user group's default permissions, the same thing the server checks, so the button no longer appears when the push would be refused
- uSync.Complete: updated a stale lockfile checksum for `@umbraco-cms/backoffice` 17.7.1 in the TimeMachine client that was failing `npm ci` in CI
- uSync.Complete: forward merged v17/main into v18/main

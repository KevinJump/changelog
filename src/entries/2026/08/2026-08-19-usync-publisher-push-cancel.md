---
title: "uSync.Complete: fix Publisher push Cancel not stopping unsaved-changes flow"
date: 2026-08-19T15:13:00
---

- Fixed Jumoo/uSync.Complete.Issues#308: pressing Cancel on the "unsaved changes" dialog when pushing a document to a remote server didn't actually cancel — the push-to-remote dialog opened anyway. Root cause was a control-flow bug in `SyncPublisherDialogActionBase.execute()` where the push-dialog code ran unconditionally regardless of the pending-changes modal's outcome
- Replaced the 2-button dialog with three clear options — Cancel / Ignore / Save and Publish — each with a one-line explanation, and applied the same fix to the Schedule/Pull sub-menu action which shared the same (also-broken) dialog
- Merged as PR #175 into `v18/main`

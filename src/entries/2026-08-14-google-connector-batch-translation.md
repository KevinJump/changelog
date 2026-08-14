---
title: Google connector batch translation and beta release
date: 2026-08-14T16:15:00
---

- Google.Connector: added batch translation via Cloud Translation v3's batchTranslateText, backed by a Google Cloud Storage bucket
- chased a real PERMISSION_DENIED through Google IAM — the fix was granting the connector's own service account `roles/storage.admin` on the bucket, not just object-level access; also fixed an invalid mime_type on the batch request
- wrote up a BATCH-SETUP.md guide for the GCS/IAM setup, since it took a lot of back-and-forth to get right
- released [`v17.1.0-beta`](https://www.nuget.org/packages/Jumoo.TranslationManager.Google/17.1.0-beta) to NuGet and rewrote the README for the whole v3/batch migration

---
title: "uSync.Complete: IProcessingOptions discriminator migration"
date: 2026-09-18T10:43:00
---

- uSync.Complete: registered `PublisherProcessingOptions`, `SnapshotsProcessingOptions`, `ExporterSyncPackProcessingOptions`, and `RestorePointProcessingOptions` with Jumoo.Processing's new `AddProcessingOptionsType<T>()`, closing a cross-assembly discriminator mismatch that hits when a sibling package pins a different Jumoo.Processing version
- pinned each type's discriminator to its existing class name via `[ProcessingOptionsDiscriminator]`, since registering alone flips the resolver to `FullName` and broke deserialization of already-queued pipeline data
- uSync.Complete: fixed uSync.Snapshots localization only registering culture `en-US`, so `uSyncSnapshots_*` keys (report/apply step warnings) never resolved under the default `en` backoffice culture
- uSync.Complete: simplified the unsaved-changes confirm dialog — dropped the Cancel option and bolded the Ignore/Save-and-Publish labels ([PR #77](https://github.com/Jumoo/uSync.Complete/pull/77))

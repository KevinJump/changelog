---
title: "uSync.Complete: IProcessingOptions discriminator migration"
date: 2026-09-18T10:43:00
---

- uSync.Complete: registered `PublisherProcessingOptions`, `SnapshotsProcessingOptions`, `ExporterSyncPackProcessingOptions`, and `RestorePointProcessingOptions` with Jumoo.Processing's new `AddProcessingOptionsType<T>()`, closing a cross-assembly discriminator mismatch that hits when a sibling package pins a different Jumoo.Processing version
- pinned each type's discriminator to its existing class name via `[ProcessingOptionsDiscriminator]`, since registering alone flips the resolver to `FullName` and broke deserialization of already-queued pipeline data

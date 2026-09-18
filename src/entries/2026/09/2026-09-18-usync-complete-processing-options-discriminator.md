---
title: "uSync.Complete: capability negotiation and v17.5.0 release prep"
date: 2026-09-18T10:43:00
---

- uSync.Complete: registered `PublisherProcessingOptions`, `SnapshotsProcessingOptions`, `ExporterSyncPackProcessingOptions`, and `RestorePointProcessingOptions` with Jumoo.Processing's new `AddProcessingOptionsType<T>()`, closing a cross-assembly discriminator mismatch that hits when a sibling package pins a different Jumoo.Processing version
- pinned each type's discriminator to its existing class name via `[ProcessingOptionsDiscriminator]`, since registering alone flips the resolver to `FullName` and broke deserialization of already-queued pipeline data
- uSync.Complete: fixed uSync.Snapshots localization only registering culture `en-US`, so `uSyncSnapshots_*` keys (report/apply step warnings) never resolved under the default `en` backoffice culture
- uSync.Complete: simplified the unsaved-changes confirm dialog — dropped the Cancel option and bolded the Ignore/Save-and-Publish labels ([PR #77](https://github.com/Jumoo/uSync.Complete/pull/77))
- uSync.Complete: added server-to-server capability negotiation — a `Capabilities` endpoint servers use to advertise what they support, cached per server and warmed on the first outgoing request. Older servers 404 it and are treated as legacy, so there's no flag day and nothing to configure
- uSync.Complete: fixed a URL canonicalisation mismatch between the two ends of a server-to-server request — the sender signed the encoded path, the receiver the decoded one, so any reserved character (space, `%`, non-ascii) failed auth looking like a wrong key
- uSync.Complete: bumped `VersionPrefix` to 17.5.0 — it was still 17.4.3, so the first prerelease went out as `17.4.3-prerelease.21`; re-ran for `17.5.0-prerelease.22`
- uSync.Complete: opened the v17.5.0 → v17/main release PR and wrote the 17.5.0 changelog entry

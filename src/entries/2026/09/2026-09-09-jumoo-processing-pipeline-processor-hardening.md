---
title: "Jumoo.Processing: harden pipeline processor discovery against missing dependencies"
date: 2026-09-09T15:33:00
---

- Jumoo.Processing: root-caused a uSync.Complete website-only startup crash (ValidateOnBuild failing to resolve IuSyncAccessHelper/SyncPublishConfigService) to the global [PipelineProcessor] assembly scan in AddJumooPipelineServices registering processors whose owning product's composer had (correctly) skipped registering their dependencies
- hardened pipeline processor discovery: each processor is now constructed individually via ActivatorUtilities, with construction failures logged and skipped instead of failing host startup for the whole site — merged as Jumoo/Jumoo.Processing#26

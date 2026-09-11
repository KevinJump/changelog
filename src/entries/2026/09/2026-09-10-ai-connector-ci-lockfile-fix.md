---
title: "AI connector: fix CI lock-file breakage on nightly bumps"
date: 2026-09-10T14:40:00
---

- Fixed CI breaking on every nightly version bump: the Tests project's `packages.lock.json` was transitively pinning the connector's fast-moving nightly Core/Serializers/Connectors versions; set `RestorePackagesWithLockFile=false` for the test project and dropped its lock file, keeping the shipped project's locked restore intact — PR #45 now green

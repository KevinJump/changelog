---
title: "Passthrough.Connector: forward-ported v17 into v18"
date: 2026-09-18T15:30:00
---

- Passthrough.Connector: forward-ported repo/CI scaffolding from v17/main into v18/main (LICENSE, README, CHANGELOG, CI workflows, Directory.Build.props, etc.) — v18/main had none of it yet
- Passthrough.Connector: regenerated `passthrough-client/package-lock.json` and `Jumoo.TranslationManager.Passthrough/packages.lock.json` to resolve a merge conflict and fix a stale NuGet lock pinned to `17.0.0` that broke CI's locked-mode restore
- Passthrough.Connector: opened, fixed, and merged Jumoo/Passthrough.Connector#6; cleaned up the merge branch afterward

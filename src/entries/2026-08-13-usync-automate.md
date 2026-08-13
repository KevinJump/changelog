---
title: uSync.Automate
date: 2026-08-13T13:00:00
---
- New `uSync.Automate.Actions.Complete` package: Automate actions/triggers wrapping uSync.Complete's publisher — push/pull content+media by item key, push/pull settings items (doc types, data types, templates, any UDI entity type) by entity type + key, create restore point, and a trigger for incoming push/pull completion
- Ported the pipeline-driving pattern from uSync.Complete.Hangfire's `ProcessingScheduler`, but with a re-entrancy gate shared with the existing uSync run actions, cancellation between steps, and the pipeline's own error surfaced instead of a bare bool
- Fixed `${ trigger.contentKey }` bindings blowing up the push action — Automate's `SettingsBindingResolver` only resolves `${ }` on string properties, so a `Guid`-typed `RootKey` handed the raw binding text to the JSON deserializer. Now a string, parsed to a Guid
- CI/CD: CodeQL, tag-triggered NuGet release via trusted publishing, PR builds covering the new test project
- Released `v17.0.0-beta1` (3 packages) to NuGet and made the repo public — fixed `RepositoryUrl` (still pointed at `KevinJump/`), added badges, community health files, and a `umbraco-marketplace.json` per package
- Checked v18 compatibility statically: all three packages compile against Umbraco 18 / Automate 18.2, and every type/member ref from the v17-built DLLs resolves against the v18 assemblies

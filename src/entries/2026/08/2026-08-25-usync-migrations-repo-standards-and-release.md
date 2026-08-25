---
title: "uSync.Migrations: repo standards, CI overhaul, and v17.0.1 release"
date: 2026-08-25T12:00:00
---

**Repo:** [Jumoo/uSyncMigrations](https://github.com/Jumoo/uSyncMigrations)

- Added repo standards (README, CHANGELOG, SECURITY, CODE_OF_CONDUCT, .editorconfig, global.json, locked NuGet restores) and CI workflows (PR build, package build, CodeQL, release) matching the Xliff.Connector standard
- Switched the release workflow from a stored NuGet API key to GitVersion + NuGet trusted publishing (OIDC)
- Fixed a YAML folding bug in the new build/pack workflow loops that broke `dotnet build`/`dotnet pack` with a bogus `-c: command not found`
- Merged [#321](https://github.com/Jumoo/uSyncMigrations/pull/321): loosened the macro migration guard so JSON-encoded macros (`<?UMBRACO_MACRO`) actually get converted
- Released [`v17.0.1`](https://github.com/Jumoo/uSyncMigrations/releases/tag/v17.0.1) to [NuGet](https://www.nuget.org/packages/uSync.Migrations) — first release since 17.0.0

---
title: GlobalLink.Connector
date: 2026-08-13T10:30:00
---
- Cleaned up debug scaffolding left from the Umbraco 17 upgrade: dead commented-out calls, a duplicate `GetFileFormats()`, an unused variable, three no-data step-tracker logs, downgraded a per-poll Info log to Debug
- Confirmed the XLIFF format setting is load-bearing (drives the actual serializer), not legacy — left it as a select rather than switching to free text
- Brought the repo up to Jumoo's standard release scaffolding: LICENSE, README, CHANGELOG, SECURITY, CODE_OF_CONDUCT, editorconfig, global.json, Directory.Build.props, GitVersion.yml, dependabot, PR/issue templates — mirrored from Xliff.Connector
- Replaced the old .NET 6-era CI with PR build / package build / tag-triggered NuGet release (trusted publishing) / CodeQL workflows
- Fixed a `ReleaseNotes` → `PackageReleaseNotes` bug in the csproj (release notes were never reaching the package) and a missing `.prettierrc` that broke `npm run format` on Windows
- Pushed `v17/main`, made it the repo default; renamed the old `master` to `v9/dev`
- Moved project + client code into `src/Jumoo.TranslationManager.GlobalLink/`, split the README into full docs + a short NuGet package readme
- Set up trusted publishing, tagged and released [`v17.0.0-rc1`](https://www.nuget.org/packages/Jumoo.TranslationManager.GlobalLink/17.0.0-rc1) to NuGet

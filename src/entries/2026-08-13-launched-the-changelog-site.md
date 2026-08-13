---
title: Built and launched the changelog site
date: 2026-08-13
---
- Built this site: Eleventy static site generator, markdown entries with title+date frontmatter, chronological listing, tiny client-side search filter
- Deployed to GitHub Pages via GitHub Actions — push to main auto-builds and deploys
- Fixed a bug where the GitHub Pages project subpath (`/changelog/`) broke absolute asset/link paths — switched to Eleventy's `pathPrefix` + `url` filter
- Switched to a light color palette
- Added `CLAUDE.md` conventions doc and a `/changelog` Claude Code skill (works from any repo) to draft and commit future entries

## GlobalLink.Connector

- Cleaned up debug scaffolding left from the Umbraco 17 upgrade: dead commented-out calls, a duplicate `GetFileFormats()`, an unused variable, three no-data step-tracker logs, downgraded a per-poll Info log to Debug
- Confirmed the XLIFF format setting is load-bearing (drives the actual serializer), not legacy — left it as a select rather than switching to free text
- Brought the repo up to Jumoo's standard release scaffolding: LICENSE, README, CHANGELOG, SECURITY, CODE_OF_CONDUCT, editorconfig, global.json, Directory.Build.props, GitVersion.yml, dependabot, PR/issue templates — mirrored from Xliff.Connector
- Replaced the old .NET 6-era CI with PR build / package build / tag-triggered NuGet release (trusted publishing) / CodeQL workflows
- Fixed a `ReleaseNotes` → `PackageReleaseNotes` bug in the csproj (release notes were never reaching the package) and a missing `.prettierrc` that broke `npm run format` on Windows
- Pushed `v17/main`, made it the repo default; renamed the old `master` to `v9/dev`
- Moved project + client code into `src/Jumoo.TranslationManager.GlobalLink/`, split the README into full docs + a short NuGet package readme
- Set up trusted publishing, tagged and released `v17.0.0-rc1` to NuGet

## uSync.Automate

- New `uSync.Automate.Actions.Complete` package: Automate actions/triggers wrapping uSync.Complete's publisher — push/pull content+media by item key, push/pull settings items (doc types, data types, templates, any UDI entity type) by entity type + key, create restore point, and a trigger for incoming push/pull completion
- Ported the pipeline-driving pattern from uSync.Complete.Hangfire's `ProcessingScheduler`, but with a re-entrancy gate shared with the existing uSync run actions, cancellation between steps, and the pipeline's own error surfaced instead of a bare bool
- Fixed `${ trigger.contentKey }` bindings blowing up the push action — Automate's `SettingsBindingResolver` only resolves `${ }` on string properties, so a `Guid`-typed `RootKey` handed the raw binding text to the JSON deserializer. Now a string, parsed to a Guid
- CI/CD: CodeQL, tag-triggered NuGet release via trusted publishing, PR builds covering the new test project
- Released `v17.0.0-beta1` (3 packages) to NuGet and made the repo public — fixed `RepositoryUrl` (still pointed at `KevinJump/`), added badges, community health files, and a `umbraco-marketplace.json` per package
- Checked v18 compatibility statically: all three packages compile against Umbraco 18 / Automate 18.2, and every type/member ref from the v17-built DLLs resolves against the v18 assemblies

## uSync.Hangfire

- Four bugs found while porting `PublisherScheduler` into the Automate package, raised as issues and fixed: `PullContent`/`PullMedia` hardcoded the push strategy so pulls silently pushed, `PerformCommand` ignored its own `DependencyFlags` argument and forced children/media/ancestors on, `ProcessingScheduler` had no re-entrancy guard so concurrent jobs could race the same pipeline, and the daily restore-point jobs scheduled against the concrete `RestorePointScheduler` when only the interface is registered in DI
- Switched release publishing to NuGet trusted publishing; fixed the `dotnet nuget push` glob on Windows runners

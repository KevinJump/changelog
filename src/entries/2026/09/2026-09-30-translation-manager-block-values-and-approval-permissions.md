---
title: "Translation Manager: block values, approval permissions, 18.3.2 release"
date: 2026-09-30T12:10:00
---

- Same pending-changes problem as uSync #1097 for translated invariant block lists/RTEs: block values now serialized with Umbraco's `IJsonSerializer` (property types set, cultures sorted), and invariant properties no longer get a stray target-culture copy (#87)
- Found that Umbraco's RTE publish merge doesn't sort block values by culture (still true in 18.0), so an invariant RTE with variant blocks can't fully match; needs reporting to Umbraco
- Fixed #88: on a fresh install, approve + publish failed until a restart, because Umbraco runs migrations with notifications suppressed and the user caches never picked up the new approve/publish permissions. User/user group caches are now refreshed after TM's migrations run (#89)
- #89 broke package validation (removed public constructor) and failed the prerelease; restored the old constructor as `[Obsolete]` (#90)
- Merged #86 (approval node status guard)
- Prerelease `17.9.3-prerelease.18` to the nightly feed and [npm](https://www.npmjs.com/package/@jumoo/translate) (`next-17`)
- Connectors: forward-ported v17 into v18 across all ten connector repos (DeepL, GlobalLink, Google, AI, CrowdIn, LanguageWire, Microsoft, Passthrough, UmbracoAI, Xliff). No behaviour changes — the backoffice-gate fix was already on v18; carried the switch to a manual `prerelease.yml`, changelog entries, and Xliff's `main` → `v17/main` doc rename. Merged with merge commits so v17 is now an ancestor of v18 everywhere
- Connectors: branch sweep — removed stale merged/unmerged local and remote branches (kept Google's `dev/v3`), fixed UmbracoAI's local `v18/main` which was tracking `origin/v17/main`
- Prerelease `18.3.2-prerelease.19` to the nightly feed; smoke-tested on a fresh Umbraco 18.2.0 + Clean site
- Released [`18.3.2`](https://www.nuget.org/packages/Jumoo.TranslationManager/18.3.2) to NuGet and [npm](https://www.npmjs.com/package/@jumoo/translate/v/18.3.2): 17.9.2/17.9.3 fixes plus the `TranslationProcessingOptions` discriminator fix for sites running alongside uSync.Complete. [Release notes](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v18.3.2)

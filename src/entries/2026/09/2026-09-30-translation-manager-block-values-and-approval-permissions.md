---
title: "Translation Manager: block values match Umbraco's publish, approval permissions after migrations"
date: 2026-09-30T12:10:00
---

- Same pending-changes problem as uSync #1097 for translated invariant block lists/RTEs: block values now serialized with Umbraco's `IJsonSerializer` (property types set, cultures sorted), and invariant properties no longer get a stray target-culture copy (#87)
- Found that Umbraco's RTE publish merge doesn't sort block values by culture (still true in 18.0), so an invariant RTE with variant blocks can't fully match; needs reporting to Umbraco
- Fixed #88: on a fresh install, approve + publish failed until a restart, because Umbraco runs migrations with notifications suppressed and the user caches never picked up the new approve/publish permissions. User/user group caches are now refreshed after TM's migrations run (#89)
- #89 broke package validation (removed public constructor) and failed the prerelease; restored the old constructor as `[Obsolete]` (#90)
- Merged #86 (approval node status guard)
- Prerelease `17.9.3-prerelease.18` to the nightly feed and [npm](https://www.npmjs.com/package/@jumoo/translate) (`next-17`)

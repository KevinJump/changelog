---
title: "uSync 17.4.3 and 18.1.5: imported block values match what Umbraco publishes, Umbraco 17.7 readiness, and Linux builds"
date: 2026-09-30T12:09:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed #1097: imported content showed "pending changes" when an invariant block list held culture-variant elements. Umbraco re-serializes the value on publish and string compares it with the draft; the draft had a null `editorAlias`, alphabetical key order and unsorted cultures. Import now sets `PropertyType`, sorts values by culture and serializes in Umbraco's order; export is unchanged ([#1098](https://github.com/KevinJump/uSync/pull/1098))
- Tests run the import through Umbraco's own `BlockListPropertyEditor` publish merge; checked on a 17.7.0 source/target pair, where released 17.4.2 reproduces the issue and the fix doesn't
- `prerelease.yml` can now publish from any branch; branch builds are versioned `-branch.{name}.{date}.{run}` so they don't clash with main nightlies ([#1099](https://github.com/KevinJump/uSync/pull/1099))
- Worked through Umbraco 17.7 readiness (#1067), keeping 17.3–17.6 working: `MovePropertyType(null)` is fixed in core, so the tests now check the outcome rather than the bug, with save-and-reload coverage both ways; culture codes are written in standard casing on export, since 17.7 normalises name cultures but not property values ([#1101](https://github.com/KevinJump/uSync/pull/1101))
- Worked around two core cache bugs fixed in 17.7/18.2: adding a composition left children's published content types stale, and a variance-only property change wasn't treated as structural. Tests fail on 17.3/18.1 without the workarounds ([#1102](https://github.com/KevinJump/uSync/pull/1102))
- Forward-ported #1098–#1102 to v18 ([#1103](https://github.com/KevinJump/uSync/pull/1103)), then did a `-s ours` merge to reset the v17/v18 merge base, which squashed forward merges had left back at 17.3.2 ([#1104](https://github.com/KevinJump/uSync/pull/1104))
- Branch sweep: deleted 7 merged branches from the remote
- Tested 17.4.3-prerelease.20260930.6 on a fresh Umbraco 17.7.0 + Clean site: export, then report showed no changes (Clean's block content included); edits imported from disk showed up on the front end straight away
- Built the same site with uSync.Complete 17.4.3 and Translation Manager 17.9.2 on top of the prerelease: 0 errors, 0 warnings, and it started cleanly
- Released [`v17.4.3`](https://github.com/KevinJump/uSync/releases/tag/v17.4.3) to [NuGet](https://www.nuget.org/packages/uSync/17.4.3)
- Tested nightly `18.1.5-prerelease.20260930.7` on an Umbraco 18.2.0 source/target pair: seeding, sync and the front end all fine. The v17 seed renamed for v18 re-saves items on every import (v18 adds `AllowedInLibrary` and drops null block udis), so made a v18 seed
- Forward-ported #1105 to v18 ([#1106](https://github.com/KevinJump/uSync/pull/1106)): prerelease, release and PR builds run once, in one job, on Linux, and the History client imports `@jumoo/usync` so it resolves on case-sensitive file systems. Nightly build down from 7m33s to 2m34s
- The Linux nightly stamped the assemblies with GitVersion's `18.1.5-ci.123+Branch…` informational version, because MSBuild reads GitVersion's exported `informationalVersion` env var as a property. Fixed with `-p:InformationalVersion` ([#1107](https://github.com/KevinJump/uSync/pull/1107)), checked with a branch prerelease, then forward-ported ([#1108](https://github.com/KevinJump/uSync/pull/1108))
- Retested nightly `18.1.5-prerelease.20260930.13`: the dashboard shows the right version and a warm re-import makes 0 changes
- Released [`v18.1.5`](https://github.com/KevinJump/uSync/releases/tag/v18.1.5) to [NuGet](https://www.nuget.org/packages/uSync/18.1.5), the first release through the Linux `release.yml`. Wrote the release notes by hand, since after the #1104 merge the auto-generated ones pull in every v17 PR

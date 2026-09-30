---
title: "uSync: imported block values match what Umbraco publishes"
date: 2026-09-30T12:09:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed #1097: imported content showed "pending changes" when an invariant block list held culture-variant elements. Umbraco re-serializes the value on publish and string compares it with the draft; the draft had a null `editorAlias`, alphabetical key order and unsorted cultures. Import now sets `PropertyType`, sorts values by culture and serializes in Umbraco's order; export is unchanged ([#1098](https://github.com/KevinJump/uSync/pull/1098))
- Tests run the import through Umbraco's own `BlockListPropertyEditor` publish merge; checked on a 17.7.0 source/target pair, where released 17.4.2 reproduces the issue and the fix doesn't
- `prerelease.yml` can now publish from any branch; branch builds are versioned `-branch.{name}.{date}.{run}` so they don't clash with main nightlies ([#1099](https://github.com/KevinJump/uSync/pull/1099))

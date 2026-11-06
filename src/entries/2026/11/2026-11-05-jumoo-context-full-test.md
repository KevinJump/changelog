---
title: "jumoo-context: /full-test skill"
date: 2026-11-05T09:40:00
---

- Added `/full-test` to the jumoo-workflow plugin: an unattended test of a package on a fresh local Umbraco site, from a local build, a given version or the latest nightly
- Checks cover what changed since the last release tag, regressions across existing features and previously fixed bugs, and a baseline of boot, migrations, restart persistence and the logs. Writes a `test-report.md` with the verdict, failures with repro steps, blocked checks and assumptions

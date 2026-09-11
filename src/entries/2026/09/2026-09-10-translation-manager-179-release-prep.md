---
title: TranslationManager 17.9.0 release prep
date: 2026-09-10T09:13:00
---

- Blocked the Xliff.OM.Netstandard 1.0.2→2.0.1 dependabot bump (breaking major version) via a dependabot ignore rule; closed [PR #45](https://github.com/Jumoo/Jumoo.TranslationManager/pull/45)
- Renamed `prerelease.yml`'s version scheme from `{version}-build.N` to `{version}-prerelease.N`
- Merged [PR #50](https://github.com/Jumoo/Jumoo.TranslationManager/pull/50) "Keep partially-approved jobs checkable while nodes are in progress"; ran two nightly prerelease builds (`17.8.3-prerelease.7`, `.8`)
- Wrote 4 docs PRs for 17.9.0 against [jumoo-docs](https://github.com/Jumoo/jumoo-docs) (memory location fix, glossary user guide, permissions/config toggles, connector-author notes); compressed the 17.9.0 prerelease plan doc from 296 to 85 lines

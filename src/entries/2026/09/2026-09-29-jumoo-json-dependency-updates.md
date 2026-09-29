---
title: "Jumoo.Json: dependency updates and v17 → v18 forward merge"
date: 2026-09-29T10:25:00
---

**Repo:** [Jumoo/Jumoo.Json](https://github.com/Jumoo/Jumoo.Json)

- Merged dependabot PRs on v17/main: codeql-action 4.37.8 → 4.37.9, Microsoft.NET.Test.Sdk 18.4.0 → 18.10.1
- Dependabot closed the coverlet.collector 10.1.0 and xunit.runner.visualstudio 4.0.0 PRs as "no longer updatable" after rebasing; bumped both by hand in [#26](https://github.com/Jumoo/Jumoo.Json/pull/26)
- Deleted the stale `main` branch; repo is down to `v17/main` and `v18/main`
- First forward merge of v17/main into v18/main since the lines split at `release/17.0.1` ([#27](https://github.com/Jumoo/Jumoo.Json/pull/27), merge commit rather than squash so the next run has a baseline): carried the Test.Sdk, coverlet and codeql-action bumps; everything else on v17 was already on v18
- Corrected CLAUDE.md: the repo's default branch is `v17/main`, not `v18/main`

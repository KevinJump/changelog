---
title: uSync.Umbraco.Commerce — Umbraco 18 upgrade and repo standards
date: 2026-08-13T15:38:00
---

**Repo:** [Jumoo/uSync.Umbraco.Commerce](https://github.com/Jumoo/uSync.Umbraco.Commerce)

- Upgraded to Umbraco 18 / Umbraco Commerce 18.1.0 on `v18/main` — pure package-version bump, no code changes needed
- Added repository standards (CODE_OF_CONDUCT, SECURITY, CHANGELOG, CLAUDE.md, editorconfig, Directory.Build.props, GitVersion, locked packages.lock.json) and GitHub Actions CI/CD (PR build, package build, NuGet trusted-publishing release, CodeQL) via [PR #11](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/11), merged
- Ported the same repo standards to the `v17/main` line via [PR #12](https://github.com/Jumoo/uSync.Umbraco.Commerce/pull/12), merged — 17.x-specific version numbers and lock file, code unchanged
- Verified both PRs' `dotnet-build.yml` checks actually ran and passed in CI, not just locally

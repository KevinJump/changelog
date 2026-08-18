---
title: uSync.Forms repo cleanup
date: 2026-08-13T17:30:00
---

**Repo:** [KevinJump/uSync.Forms](https://github.com/KevinJump/uSync.Forms)

- Cleaned up GitHub branches — deleted 4 stale/superseded ones (`master`, `dev/folders`, `v13/html-message-fix`, `v17/rc2-build`), left one `{version}/main` branch per Umbraco major
- Cleaned up Dependabot: dismissed 16 stale alerts pointing at a deleted pre-v9 project, added `.github/dependabot.yml` scoped to live projects, set it to ignore major-version bumps for Umbraco packages (this branch targets Umbraco 17 specifically)
- Fixed 11 of 18 npm audit vulnerabilities via lockfile updates (postcss, rollup, vite, ws, nanoid, picomatch, uuid, markdown-it); pinned `@umbraco-cms/backoffice` to the 17.4.2 release to match the nuget package versions
- Brought the repo up to the same baseline as [uSync](https://github.com/KevinJump/uSync): added `LICENSE` (MPL-2.0), `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, issue/PR templates, `packages.lock.json` for all three projects, and GitHub Actions workflows for CodeQL, PR builds, package builds, and tag-triggered NuGet releases

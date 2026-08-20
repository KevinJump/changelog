---
title: "Jumoo.TranslationManager.UmbracoAi: repo cleanup and first v17 release"
date: 2026-08-20T13:41:00
---

**Repo:** [Jumoo/Jumoo.TranslationManager.UmbracoAI](https://github.com/Jumoo/Jumoo.TranslationManager.UmbracoAI)

- Removed unused `@hey-api/*` devDependencies from the client, closing two dependabot PRs (including one dragging TypeScript to 7.x)
- Renamed default branch `main` → `v17/main` to match the rest of Jumoo's per-Umbraco-major convention; cleaned up stale branches
- Tagged and released [`v17.0.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.UmbracoAi/17.0.0) to NuGet, confirming the release pipeline (trusted publishing via OIDC) works end to end

---
title: "Jumoo.TranslationManager.UmbracoAi: repo cleanup and first v17 release"
date: 2026-08-20T13:41:00
---

**Repo:** [Jumoo/Jumoo.TranslationManager.UmbracoAI](https://github.com/Jumoo/Jumoo.TranslationManager.UmbracoAI)

- Removed unused `@hey-api/*` devDependencies from the client, closing two dependabot PRs (including one dragging TypeScript to 7.x)
- Renamed default branch `main` → `v17/main` to match the rest of Jumoo's per-Umbraco-major convention; cleaned up stale branches
- Tagged and released [`v17.0.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.UmbracoAi/17.0.0) to NuGet, confirming the release pipeline (trusted publishing via OIDC) works end to end
- Added a `translate_page` Umbraco.AI tool (chat-driven translation, e.g. "translate this page to French") — creates and submits a Translation Manager job using this connector, with `includeChildren` and `publish` options; auto-detects the target culture when only one is configured, or surfaces the options for the model to ask the user when there's more than one
- Installed `Umbraco.AI.Agent.Copilot` in the demo site to get chat/tool-calling working locally for manual testing
- Merged [PR #8](https://github.com/Jumoo/Jumoo.TranslationManager.UmbracoAI/pull/8)
- Added `docs/tools.md` documenting the `translate_page` AI tool (with screenshots of the clarification and auto-run chat flows); merged [PR #9](https://github.com/Jumoo/Jumoo.TranslationManager.UmbracoAI/pull/9)
- Tagged and released [`v17.1.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.UmbracoAi/17.1.0) to NuGet

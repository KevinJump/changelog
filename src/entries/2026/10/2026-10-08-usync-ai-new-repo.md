---
title: "uSync.AI: new repo through to the 17.0.0 release"
date: 2026-10-08T09:36:00
---

**Repo:** [Jumoo/uSync.AI](https://github.com/Jumoo/uSync.AI)

- uSync.AI: replaced the old uSync.Umbraco.Ai prototype with a new private repo, scaffolded from uSync.Automate with the jumoo-context workflow templates
- uSync.AI.Sync: handlers and serializers for Umbraco.AI connections, guardrails, contexts, profiles and settings; items keep their Ids across servers
- Connection secrets are never written to disk: sensitive settings are left out of the file and keep the target's own value on import
- uSync.AI.Prompt and uSync.AI.Agent: sync for prompts and agents, with agent tool permissions matched to user groups by alias
- uSync.AI.Tools: agent tools for uSync report, export and import, checked against the acting user's uSync access
- uSync.AI.Complete: push and pull for AI items, plus agent tools to publish, pull and take restore points through the publisher
- uSync.AI and uSync.Complete.AI meta packages, with readmes and marketplace files
- Logged upstream requests for Umbraco.AI and uSync.Complete, including that the publisher can't handle Umbraco.AI's non-UDI entity types
- Merged the dependabot backlog and stopped it proposing Umbraco backoffice npm upgrades
- Made the repo public after checking history, workflows and PRs for secrets; CodeQL triggers back on, and the `nuget` environment now needs a reviewer before a release publishes
- uSync.AI.Sync: new `IgnoreEncrypted` option, so `IgnoreSecretValues: false` syncs API keys while encrypted values stay out
- Pre-releases: fall back to a `first_version` of 17.0.0 before the first tag, and check out the private nightly-feed action with a PAT (public repos can't `uses:` it)
- Tested the nightly builds on two Umbraco 17.7.1 sites: sync, delete/rename/import, push and pull between them, agent tools against a real model, and the Copilot chat
- Fixed: a standard agent saved without a config showed as changed on every report and import
- uSync.AI.Complete: AI items now always bring their dependencies on push/pull (`AlwaysIncludeDependencies`, default on)
- Fixed: uSync.Complete's dependency cache was never cleared for AI items, so pushes sent stale dependency lists; the AI handlers now publish a change notification that uSync.AI.Complete uses to clear it
- jumoo-context, uSync, uSync.Forms: prerelease template and docs updated for public repos, and the nightly-feed checkout comments corrected
- Released [`v17.0.0`](https://github.com/Jumoo/uSync.AI/releases/tag/v17.0.0): all seven packages on NuGet, including [`uSync.Complete.AI`](https://www.nuget.org/packages/uSync.Complete.AI)

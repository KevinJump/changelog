---
title: "uSync.AI: new repo, sync, tools and Complete support"
date: 2026-10-08T09:36:00
---

- uSync.AI: replaced the old uSync.Umbraco.Ai prototype with a new private repo, scaffolded from uSync.Automate with the jumoo-context workflow templates
- uSync.AI.Sync: handlers and serializers for Umbraco.AI connections, guardrails, contexts, profiles and settings; items keep their Ids across servers
- Connection secrets are never written to disk: sensitive settings are left out of the file and keep the target's own value on import
- uSync.AI.Prompt and uSync.AI.Agent: sync for prompts and agents, with agent tool permissions matched to user groups by alias
- uSync.AI.Tools: agent tools for uSync report, export and import, checked against the acting user's uSync access
- uSync.AI.Complete: push and pull for AI items, plus agent tools to publish, pull and take restore points through the publisher
- uSync.AI and uSync.Complete.AI meta packages, with readmes and marketplace files
- Logged upstream requests for Umbraco.AI and uSync.Complete, including that the publisher can't handle Umbraco.AI's non-UDI entity types
- Merged the dependabot backlog and stopped it proposing Umbraco backoffice npm upgrades

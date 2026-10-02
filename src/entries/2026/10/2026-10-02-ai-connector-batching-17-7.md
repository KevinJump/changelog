---
title: "AI connector: request batching, retry fixes and 17.7.0"
date: 2026-10-02T13:15:00
---

- AI connector: the OpenAI, Azure OpenAI, Foundry and GitHub Models SDKs no longer retry on top of the Polly pipeline (one 429 was 16 requests, now 4). Per-attempt timeout raised from 30s to 5 min with a 20 min total, both configurable
- AI connector: values are gathered per node into shared requests instead of one request per value. A 25 node test job went from 102 requests to 27, request time from 87s to 37s, and about 8% lower token cost
- AI connector: structured requests send text as-is rather than as JSON unicode escapes, which the model was copying back mangled. Responses with control characters the source didn't have are rejected
- AI connector: HTML splitting keeps wrapper tags, comments, empty elements and whitespace, with no more `<#text>` wrappers. Long text splits at sentence ends, skipping abbreviations like "Mr."
- AI connector: OpenAI, Azure OpenAI and Foundry fail on a token-limit or content-filter stop instead of saving partial text. The batch path gets the MaxTokens cap and leaves cut-off lines untranslated. Added a shorter-than-source warning, and rejected structured responses now log why
- AI connector: the OpenAI batch client goes through the shared pipeline and the configured endpoint
- AI connector: test project went from 15 to 108 NUnit tests
- AI connector: merged the vite 6 → 8 and prettier Dependabot PRs
- Released [`17.7.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.AI/17.7.0) to NuGet

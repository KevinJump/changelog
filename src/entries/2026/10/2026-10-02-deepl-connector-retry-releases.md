---
title: "DeepL connector: retry policy, 17.4.0 and 18.2.0"
date: 2026-10-02T12:28:00
---

- DeepL connector: retries DeepL rate limits and dropped connections with exponential backoff, using the resilience pipeline that now ships in Translation Manager 17.9.0 / 18.3.0. Bad API key, exhausted quota and unknown glossary still fail straight away
- DeepL connector: removed the Throttle setting (forced to 0). Added a Retries box to the config page (toggle, count, base delay), with retry on by default
- DeepL connector: moved off the Translation Manager nightly packages onto the released 17.9.0 ones and dropped the temporary NuGet.Config
- DeepL connector: forward-merged v17 into v18 with a merge commit, so the branch history stays intact for the next forward-port
- Released [`17.4.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.DeepL/17.4.0) and [`18.2.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.DeepL/18.2.0) to NuGet

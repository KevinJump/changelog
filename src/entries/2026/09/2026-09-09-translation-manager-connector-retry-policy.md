---
title: "Translation Manager: opt-in Polly retry pipeline for machine connectors"
date: 2026-09-09T20:57:00
---

- Jumoo.TranslationManager: added an opt-in Polly resilience pipeline to `MachineConnectorBase<TOptions>` — off by default (`UseRetryPolicy`), wraps the realtime `Translate()` call and exposes `ExecuteWithResilienceAsync` so connectors can reuse it for their own calls (e.g. batch upload/status); `BuildResiliencePipeline` is virtual so each connector classifies its own API's transient failures instead of one generic policy for all — Jumoo/Jumoo.TranslationManager#39
- Jumoo.TranslationManager.DeepL: wired the new pipeline into `DeepLConnector`, retrying only `TooManyRequestsException` (rate limit) and `ConnectionException` (transport failure) with exponential backoff — Jumoo/Jumoo.TranslationManager.Connector.DeepL#18
- removed DeepL's manual throttle setting from its config page and hard-coded `Throttle` to 0, since the retry policy now handles rate limiting instead

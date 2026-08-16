---
title: uSync serializer save failures no longer silently discarded
date: 2026-08-16T08:06:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed `LanguageSerializer`/`DictionaryItemSerializer`/`WebhookSerializer` discarding the `Attempt` result from save calls — a rejected save (e.g. invalid ISO code) was silently dropped while the import still reported success (issue #1038)
- Followed up across the rest of the serializers with the same bug: `ContentType`/`MediaType`/`MemberType` (shared base), `DataType`, `Domain`, `Template`, `Media`, `Content` — each now checks the save/delete result and throws instead of swallowing the failure

---
title: Google connector migrated to Cloud Translation v3
date: 2026-08-14T10:48:00
---

- Google.Connector: migrated to Cloud Translation v3 (Advanced), dual-mode credentials — API key (v2) still works untouched, pasting a service account JSON switches a connector over to v3
- added glossaries (auto-match + explicit mappings, us-central1 only), model selection (NMT/Translation LLM), regional/multi-regional endpoint selection
- fixed a language-code truncation bug that broke zh-Hant/pt-BR/etc, and a broken CanTranslate check that returned false for almost every real culture
- restructured into Models/Services/Api/Boot; the Google client now lives in a long-lived singleton instead of being rebuilt per job — sets up phase 2 (batch translation)
- bumped Jumoo.TranslationManager.Connectors 17.0.0 → 17.5.3
- opened PR #3

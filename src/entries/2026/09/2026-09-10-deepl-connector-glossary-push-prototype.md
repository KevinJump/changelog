---
title: "DeepL connector: IGlossaryPushProvider prototype"
date: 2026-09-10T15:53:00
---

- Prototyped `IGlossaryPushProvider` against DeepL's classic glossary API; confirmed fingerprint-based push-once behaviour (no duplicate glossary on resubmit) and that both inline and batch translation pick up the pushed glossary
- Found two DeepL-side issues worth a product call: free-tier accounts cap classic glossaries at one, and DeepL doesn't reliably apply every glossary term in a single request
- Opened PR #19, left open until Core/Connectors ship the interface on NuGet

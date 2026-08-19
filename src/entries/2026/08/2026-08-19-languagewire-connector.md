---
title: "LanguageWire connector: language mapping UI + first v17 release"
date: 2026-08-19T11:31:00
---

- Jumoo.TranslationManager.LanguageWire: reworked language mapping config UI — both sides are now dropdowns, sourced from Umbraco's installed languages and LanguageWire's language list
- added a "Language Status" check + warning banner on the config page, flagging installed languages that don't resolve to a valid LanguageWire language
- submitted job view: shows job stage + LanguageWire error messages, added a manual refresh button and 5-minute polling, moved debug output into its own box, tidied layout
- pending-simple view: tightened property row spacing
- released [`v17.0.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.LanguageWire/17.0.0) to NuGet — first tagged release, confirms release.yml works end-to-end

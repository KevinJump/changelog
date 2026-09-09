---
title: "Translation Manager: moved Memory to the Translations section, added granular view permissions, and a ClientComposer backoffice gate fix"
date: 2026-09-09T15:30:00
---

- Jumoo.TranslationManager: moved Translation Memory from the Settings section to the Translations section, alongside Glossary, with its own enable/disable toggle (`TranslationMemoryService.Enabled`, on by default) mirroring Glossary's
- added `IMemoryAwareProvider` marker interface so the frontend can tell which connectors use translation memory, same pattern as `IGlossaryAwareProvider`
- added two new granular permissions, "View glossary" and "View translation memory" — a user needs both Translations section access and the specific permission to see either menu item; a migration grants both to the Administrators group only, on purpose not backfilled to every group that previously had implicit access
- added a matching description box to the Glossary view (Memory already had one), and gave the Memory menu item its own icon (`icon-fingerprint`) instead of sharing Glossary's
- gated ClientComposer (the management-api/backoffice side of translation) behind the Umbraco backoffice being enabled — it called AddJumooProcessing() unconditionally, which on a website-only site could register other products' (e.g. uSync.Complete's) pipeline processors without their dependencies registered, crashing startup — merged as Jumoo/Jumoo.TranslationManager#35
- fixed the Glossary/Memory menu items still showing for a user without the new view permissions — added Umbraco's built-in `Umb.Condition.UserPermission.Fallback` client-side condition, matching how the server already gated the controllers (merged as Jumoo/Jumoo.TranslationManager#36)
- fixed a stray "Unknown error" notification from that same permission gap — the enabled-check endpoints returned a bare 401 with no problem-details body when called by a user without the permission, so the frontend now checks fallback permissions before making that call at all
- added Glossary/Translation Memory item-count cards to the Translations dashboard, two-across beneath the four job-stage cards, permission-gated the same way (merged as Jumoo/Jumoo.TranslationManager#37)

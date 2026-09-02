---
title: "Translation Manager: added a Glossary feature (now with TBX import/export), fixed single-connector selection bug"
date: 2026-09-02T15:05:00
---

- Translation Manager: fixed a bug where, if only one connector was enabled and the translation set had no default connector configured, the job creation step never set the provider on the pending state — so the connector picker showed nothing and its option views never rendered
- Translation Manager: added a Glossary — a global terminology list (a value, or a "do not translate" flag, per installed language) with CSV import/export per language pair; connectors opt in via new additive base classes, existing connector bases untouched
- Translation Manager: Glossary lives in the Translations section (editor content), not Settings — read endpoints now require Translations-section access instead of just backoffice login
- Translation Manager: fixed a bug where editing a glossary term inserted a duplicate row instead of updating it (unique constraint violation on the term's key)
- Translation Manager: opened a draft PR for the Glossary feature, with a TODO to revisit TBX import/export before merging
- Translation Manager: added TBX (TermBase eXchange) import/export to the Glossary — service-level, so connectors can pull/push a remote termbase directly, plus a format picker in the backoffice import/export modals
- Translation Manager: reworked the Glossary backoffice layout — Import/Export/Clear moved to the page footer, Add Term into the box's own header, term edit modal switched from a dialog to a sidebar so the per-language value table doesn't get stuck in a small popup
- Translation Manager: added a `Translation:GlossaryEnabled` config setting and `GlossaryService.Enable()`/`Disable()` so the Glossary can be switched off entirely — backoffice menu item hidden, controllers 404 — for e.g. a connector whose remote service owns its own termbase

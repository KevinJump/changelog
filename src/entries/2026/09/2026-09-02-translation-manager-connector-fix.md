---
title: "Translation Manager: added a Glossary feature, fixed single-connector selection bug"
date: 2026-09-02T15:05:00
---

- Translation Manager: fixed a bug where, if only one connector was enabled and the translation set had no default connector configured, the job creation step never set the provider on the pending state — so the connector picker showed nothing and its option views never rendered
- Translation Manager: added a Glossary — a global terminology list (a value, or a "do not translate" flag, per installed language) with CSV import/export per language pair; connectors opt in via new additive base classes, existing connector bases untouched
- Translation Manager: Glossary lives in the Translations section (editor content), not Settings — read endpoints now require Translations-section access instead of just backoffice login
- Translation Manager: fixed a bug where editing a glossary term inserted a duplicate row instead of updating it (unique constraint violation on the term's key)
- Translation Manager: opened a draft PR for the Glossary feature, with a TODO to revisit TBX import/export before merging

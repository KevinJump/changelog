---
title: "Translation Manager: save-only auto-approve, 17.10.0 / Umbraco 17.8 readiness"
date: 2026-10-15T07:14:00
---

- Translation Manager: added a "Save only (do not publish)" option to auto-approve on translation sets, stored as a set option (no migration); default behaviour unchanged
- Translation Manager: merged into v17/main and forward-ported to v18/main
- Translation Manager: worked through the Umbraco 17.8 readiness checklist on the v17/17.10.0 version branch, one PR each into the branch
- Translation Manager: culture-variant block properties no longer carry source-culture element values or expose entries into the target page
- Translation Manager: local link matching now handles upper-case GUIDs and url-encoded `%7BlocalLink:` links
- Translation Manager: TM's rich text editor keeps links when a translator edits a value (added the Tiptap Link extension)
- Translation Manager: separator above "Send to translation" in the actions menu on 17.8
- Translation Manager: test for 17.8's publish merge removing stale target values (switches on when tests move to 17.8)
- Translation Manager: publish/save handlers skip work until TM's tables exist, fixing errors on a fresh site importing with uSync at startup
- Translation Manager: checked on a 17.8.0-rc test site: block-level translate/publish across en/fr/de with nested blocks, save-only approval flags only the target culture, links, separator, section access
- Translation Manager: merged everything into v17/17.10.0; draft release PR into v17/main waits on Jumoo.Processing 17.5

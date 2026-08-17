---
title: TranslationManager log flooding fix
date: 2026-08-17T15:30:00
---

- TranslationManager: fixed log flooding reported in issue #104 — loopback sets only queue a node when the set's source culture was actually dirtied by the save, which is expected to filter out most sets on a given save; a recent change had promoted that benign no-match case from silent to `LogWarning`, flooding logs on invariant doctypes and culture-only saves
- Demoted both no-set-match cases back to Debug and reworded the message so it doesn't read as a misconfiguration
- Added a short-circuit so invariant (non-variant) doctypes skip the culture-dirty scan entirely instead of walking an always-empty collection

Commit: `7e1ad48` on `v17/main`

---
title: "uSync: structured diff for JSON/block changes"
date: 2026-09-02T14:24:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Replaced the word-diffed, pretty-printed JSON in the change-detail view with a structured diff — classifies each change (masked, single-sided, JSON, XML/text, word, scalar) and picks a rendering strategy per kind instead of running everything through `diffWords`
- JSON/block diffs now match array entries by identity (key/udi/alias+culture) instead of index, so inserting one block into a block list reports one change instead of rewriting the whole array
- Hand-rolled a line diff with collapsed unchanged runs for long text/XML, since Umbraco only re-exports `diffWords`
- Replaced the change-detail table with expandable rows (collapsed by default once there's more than one change) and a raw-values toggle per JSON row
- Fixed two accidental-precedence bugs and a case where Error/Warning notices were being diffed against an empty string
- Opened [KevinJump/uSync#1060](https://github.com/KevinJump/uSync/pull/1060)

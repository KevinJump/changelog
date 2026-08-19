---
title: TranslationManager choose-provider validity fix
date: 2026-08-19T10:30:00
---

- TranslationManager: fixed a bug where the create-job "choose provider" step could save a job with no `providerKey` when a set had no default connector configured and wasn't locked, and only one connector was installed — the step never dispatched a `pipeline-valid` event, so the Next button stayed enabled while the connector was still resolving asynchronously
- Added validity gating based on whether `pending.providerKey` is actually set, closing the same race for the multi-connector/no-default case too
- Merged as PR #174 into `v17/main`

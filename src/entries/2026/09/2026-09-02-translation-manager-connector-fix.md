---
title: "Translation Manager: fixed single-connector selection bug"
date: 2026-09-02T15:05:00
---

- Translation Manager: fixed a bug where, if only one connector was enabled and the translation set had no default connector configured, the job creation step never set the provider on the pending state — so the connector picker showed nothing and its option views never rendered

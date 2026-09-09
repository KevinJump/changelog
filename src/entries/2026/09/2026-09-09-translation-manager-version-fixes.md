---
title: "Translation Manager: version-select and connector diagnostics fixes"
date: 2026-09-09T12:09:00
---

- fixed a bug where new translation jobs defaulted to published content instead of the latest edited version when a set's "hide version choice" was on — includeUnpublished now defaults to true regardless, hideVersion only controls whether the editor can override it
- added connector version display to the diagnostics view, reading it the same way the core version is read for consistency

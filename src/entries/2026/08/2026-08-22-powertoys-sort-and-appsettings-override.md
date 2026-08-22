---
title: "PowerToys: environment sorting and appsettings overrides"
date: 2026-08-22T09:49:00
---

**Repo:** [Jumoo/umbraco.community.powertoys](https://github.com/Jumoo/umbraco.community.powertoys)

- Added drag-and-drop reordering to the Environment Indicator power toy's settings list, using Umbraco's `UmbSorterController` - lets a specific host pattern be dragged above a broader catch-all instead of delete/re-add
- Added an appsettings.json override for power toy settings and the enabled flag (`PowerToys:{Name}` section) - a config value takes priority over the backoffice-stored one and locks it as read-only there
- Fixed a bug where the config override converter round-tripped bools/numbers as JSON strings instead of their real types
- Fixed the shared power-toy settings modal's Save button losing its visible label (whitespace in its default slot was overriding the `label` attribute)

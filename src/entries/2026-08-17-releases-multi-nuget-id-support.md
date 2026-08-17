---
title: Multi-ID package tracking for releases site
date: 2026-08-17T09:57:00
---

**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Added `aliasNugetIds` support to `data/packages.json` so renamed/rebranded packages (several Translation Manager connectors, GlobalLink) keep their full NuGet download and version history merged under their current package ID
- Added a JSON Schema (`data/packages.schema.json`) for `packages.json` plus VS Code wiring for editor autocomplete/validation
- Renamed several Translation Connector titles to a shorter "X Connector" style and fixed LanguageWire's `githubRepo` (was pointing at the GlobalLink repo)

---
title: Stats page for releases.jumoo.co.uk
date: 2026-08-15T08:40:00
---

**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Added a `stats.html` page: total downloads counter, release cadence, per-package download trends, a "legacy debt" gauge (% of downloads on EOL Umbraco majors), and per-package version adoption breakdown, using Chart.js
- Added NuGet download-count collection to the fetch script, with a daily history snapshot for trend sparklines
- Made stats sections collapsible, all but the summary collapsed by default
- Added 3 new Translation Manager connector packages (CSV, SmartCat, Publicis) to the tracked package list

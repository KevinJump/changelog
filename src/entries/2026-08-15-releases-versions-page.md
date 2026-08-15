---
title: Added a supported-versions page to the releases site
date: 2026-08-15T07:51:00
---

**Repo:** [Jumoo/releases](https://github.com/Jumoo/releases)

- Added a `/versions` page showing the highest release per supported Umbraco major for each package (e.g. uSync v13.4, v17.3, v18.1), grouped by category into collapsible sections, EOL majors shown dimmed rather than hidden
- Added `eol.json` — Umbraco major → EOL date, sourced from Umbraco's [LTS/EOL page](https://umbraco.com/products/knowledge-center/long-term-support-and-end-of-life/)
- `fetch-releases.mjs` now resolves each release's real Umbraco major from NuGet dependency data (direct `Umbraco.Cms.*` dependency, or one hop through another tracked package) instead of assuming a package's own version number matches Umbraco's — fixes packages like uSync.Hangfire that version independently
- Duplicated the site nav into the page header (not just footer) so it doesn't get lost as pages grow

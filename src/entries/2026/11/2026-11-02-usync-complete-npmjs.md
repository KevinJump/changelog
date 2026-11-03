---
title: "uSync.Complete: npm packages to npmjs.org, file report fixes"
date: 2026-11-02T10:30:00
---

- `@jumoo/usync-expansions` and `@jumoo/usync-publisher-assets` moved off the Azure feed to npmjs.org, published from release and prerelease
- Five backoffice clients moved to `configureClient`
- Settings push only hashes the selected file types
- A production site leaves file changes out of the report, with a note explaining why
- Updated Jumoo.Processing to 17.5.2; dropped the Azure push and `nuget.exe` from the build

---
title: "jumoo-simple-site: build the simplified jumoo.co.uk"
date: 2026-09-04T14:49:00
---

- Built the simplified jumoo.co.uk from scratch — static Eleventy site (markdown + JSON data, hand-written CSS, no framework), replacing the old site, focused on uSync and Translation Manager
- Added a daily scheduled workflow that fetches live NuGet versions for uSync/uSync.Complete/Translation Manager instead of hand-maintained numbers — caught and fixed a bug where a `generatedAt` timestamp made it commit a no-op every run
- Checked every `docs.jumoo.co.uk` link against the docs site's actual sitemap rather than trusting the old copy — found and fixed five that had been broken since the port

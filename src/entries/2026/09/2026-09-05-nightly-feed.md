---
title: "Wired up a nightly NuGet feed on Cloudflare R2"
date: 2026-09-05T19:30:00
---

- nightly-feed-config: added a shared composite GitHub Action so any repo can publish to the
  [nightly.jumoo.uk](https://nightly.jumoo.uk) feed with a single workflow step, no PAT needed
  despite the repo being private
- jumoo-context: documented the new feed and how to wire a repo up to it, and recorded the R2
  credentials in the secrets register

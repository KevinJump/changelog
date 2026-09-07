---
title: "uSync.Complete: Basic Auth push fix and first real NuGet release"
date: 2026-09-07T16:15:00
---

- uSync.Complete: found and fixed a bug where server-to-server push requests failed with `401 The request requires user authentication` when the target had Umbraco's Basic Auth shared-secret bypass configured — the header was built with the wrong key/value pairing and got overwritten before the request went out
- Migrated the nightly build feed from Azure Artifacts to the new shared nightly.jumoo.uk feed (R2/Sleet-based), switching to the mandated `{version}-build.{increment}` version scheme
- Ran a full dry-run of the repo's NuGet release workflow for the first time — tagged a `17.4.1-alpha` prerelease, confirmed all 12 packages published cleanly and installed into a fresh Umbraco 17 site with the backoffice UI intact — before cutting a real release
- Released [`17.4.1`](https://www.nuget.org/packages/uSync.Complete/17.4.1) to NuGet, published customer-facing notes on [uSync.Complete.Issues](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.4.1), and forward-ported the fix and version bump to v18/main

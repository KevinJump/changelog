---
title: "Jumoo.Processing: v19 beta01"
date: 2026-10-29T17:52:00
---
- Jumoo.Processing: `v19/main` branched from `v18/main` for the Umbraco 19 upgrade
- Moved to .NET 11 (RC3 SDK) and Umbraco `19.0.0-beta1`; runtime async turned on to match Umbraco
- SignalR hub now connects with the backoffice cookie (Umbraco 19 dropped the client-side token); `startHub(token, methods)` deprecated in favour of `startHub(methods)`
- Pipeline create/update/process calls wait for re-login after a session timeout and retry, instead of the run dropping back to waiting
- Removed `IPipelineProcessor.Create(string)`; `Create(strategy, options)` now on the interface, `IPipelineOptionsProcessor` deprecated
- `release.yml`: installs the pinned SDK before GitVersion, which failed the first beta01 tag run
- Fixed the missing Step label in the error modal on `v17/main`, forward-ported to v18 and v19
- Released `19.0.0-beta01` to [NuGet](https://www.nuget.org/packages/Jumoo.Processing) and [npm](https://www.npmjs.com/package/@jumoo/processing) (`next-19`)

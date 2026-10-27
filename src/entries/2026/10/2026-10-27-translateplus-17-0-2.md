---
title: "TranslatePlus connector: 17.0.2"
date: 2026-10-27T16:43:00
---

- TranslatePlus (Publicis): released `v17.0.2` to [NuGet](https://www.nuget.org/packages/Jumoo.TranslationManager.Publicis)
- Fixed duplicate Publicis orders from background submit: the queued submission held the job from submit time, so if the 30-minute sweep sent it first it went again. Jobs are now reloaded from the db and only sent while at `init`
- A background check that times out on the lock now stops instead of running without it; the next sweep picks the job up
- Order creation is logged at Information with the job and Publicis order id, on both submit paths

---
title: "Jumoo.Json: tagged the live NuGet releases"
date: 2026-10-26T15:26:00
---

**Repo:** [Jumoo/Jumoo.Json](https://github.com/Jumoo/Jumoo.Json)

- Jumoo.Json: dropped the planned 17.0.3 / 18.0.4 releases. Nothing in the library has changed since the versions on NuGet, only CI, build props and package metadata
- Tagged the untagged July releases at the commits recorded in their nuspecs: [`release/17.0.2`](https://github.com/Jumoo/Jumoo.Json/tree/release/17.0.2) (8af3dbd, [NuGet](https://www.nuget.org/packages/Jumoo.Json/17.0.2)) and [`release/18.0.3`](https://github.com/Jumoo/Jumoo.Json/tree/release/18.0.3) (64d91c0, [NuGet](https://www.nuget.org/packages/Jumoo.Json/18.0.3))
- Kept the `release/` prefix so the tags don't trigger the new `v*` release workflow
- Closed the release issue and ticked Jumoo.Json off the release worklist

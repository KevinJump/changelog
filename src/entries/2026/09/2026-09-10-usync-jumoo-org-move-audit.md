---
title: "uSync: audited move to Jumoo org"
date: 2026-09-10T08:48:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Audited moving the repo from `KevinJump/uSync` to `Jumoo/uSync`: GitHub redirects/secrets carry over fine, but NuGet's OIDC trusted-publishing policy is bound to the exact repo owner and would break the next release unless updated in lockstep; found 7 files with hardcoded `KevinJump` URLs (plus a pre-existing wrong `uSync8`/`core/main` reference). Documented findings for when the move is actually planned in.

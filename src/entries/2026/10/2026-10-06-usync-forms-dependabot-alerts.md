---
title: "uSync.Forms: cleared the dependabot alerts"
date: 2026-10-06T09:38:00
---

**Repo:** [KevinJump/uSync.Forms](https://github.com/KevinJump/uSync.Forms)

- Went through the 25 open dependabot alerts on v17. None affect what ships: all npm ones are dev-only dependencies of `@umbraco-cms/backoffice`, and the NuGet one is on the test site
- Refreshed both client lockfiles ([#67](https://github.com/KevinJump/uSync.Forms/pull/67)), which cleared 14 alerts. `@umbraco-cms/backoffice` goes to 17.7.1, with patched `dompurify`, `prosemirror-view`, `@tiptap/core` and `source-map-js`
- Dismissed the other 11 as not used: `js-yaml` and monaco's nested `dompurify` are pinned to exact versions upstream, and the `Umbraco.Cms` pin on the test site is deliberate
- Merged the two Vite 8.3.2 dependabot PRs and removed two stale merged branches from the remote

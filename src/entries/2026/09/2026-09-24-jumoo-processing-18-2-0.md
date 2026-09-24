---
title: "Jumoo.Processing: v17 → v18 forward merge, 18.2.0 release"
date: 2026-09-24T12:18:00
---

- Jumoo.Processing: merged v17/main forward into v18/main. Brought over the load-balancing work (node identity, atomic queue claim, SignalR backplane + client reconnect) and the switch to manual-only nightly builds, which now applies to v18 too.
- Jumoo.Processing: regenerated the v18 API client against a Release build of the site (a Debug build leaks the sample types into it) and moved the reattach call over to v18's function-style client.
- Jumoo.Processing: fixed two changelog/docs lines the merge got wrong: `Unreleased` had been renamed to 17.4.2, and CLAUDE.md had picked up v17's script name.
- Jumoo.Processing: backfilled the missing 18.1.1 changelog entry and published its GitHub release, which had been sitting as a draft.
- Released [`18.2.0`](https://www.nuget.org/packages/Jumoo.Processing/18.2.0) to NuGet. The npm package needed a re-run once the Azure Artifacts PAT was in place.
- Tidied the Jumoo.Processing branches back to `{version}/main` plus the open dependabot PRs.

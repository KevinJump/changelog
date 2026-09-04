---
title: "Translation Manager: v17 licence fix, forward-merge, and v18.2.1 release"
date: 2026-09-04T09:00:00
---

- Translation Manager (v17): added a `jumoo-translation-manager-checker/{version}` user agent header to the subscription/domain licence check `HttpClient`s, matching uSync.Complete's pattern
- Forward-merged that fix from v17/main into v18/main
- Released [`v18.2.1`](https://www.nuget.org/packages/Jumoo.TranslationManager/18.2.1) to NuGet — rolls up the licence header fix plus the earlier forward-ported 17.8.1 fixes (install packaging bug, first-install set guess, single-connector auto-select)
- Backfilled a missing `v18.2.0` entry and release on the public `Jumoo.TranslationManager.Issues` changelog repo alongside the new `v18.2.1` entry
- Translation Manager (v17): added a clone-to-language button on the document translation status table — clones content from the current culture into an untranslated target, with a confirm dialog
- Forward-merged that into v18/main, resolving conflicts with v18's translate-in-place changes

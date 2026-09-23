---
title: "uSync.Complete: 17.5.0 release review, merged to v17/main"
date: 2026-09-23T17:30:00
---

- uSync.Complete: reviewed the 17.5.0 release PR before merging back to `v17/main`
- Publisher: affinity cookies now come only from the per-session store (HttpClient's own cookie handling is off)
- Restored the 17.4 public/protected signatures that changed in 17.5.0 as `[Obsolete]` forwarding overloads, for removal in v19, so code built against 17.4 keeps working
- Temp folder cleanup job now runs on every server whatever `uSync:WorkingFolder:Path` is set to; relative paths now resolve against the content root
- Publisher v2 request signing: the body hash is sent with every v2 request, upload endpoints are marked with an attribute, and an upload whose hash doesn't match returns 400
- Server-to-server hub: default timeout 1s → 3s, and connections that fail to start are now disposed
- Publisher browser: fixed the URL restore vs server picker race, stale search/sort/page responses, and selection after a re-fetch; localised the new strings
- Changelog now includes the list view, paging/sort/search and the server identifier header app
- Built `17.5.0-prerelease.25`; ARR affinity and v2 signing retests passed; merged to `v17/main`
- Release on hold until Translation Manager handles Jumoo.Processing's options type loading

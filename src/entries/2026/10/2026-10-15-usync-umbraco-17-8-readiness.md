---
title: "uSync: Umbraco 17.8 readiness"
date: 2026-10-15T14:29:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- uSync: RTE dependencies now pick up URL-encoded `%7BlocalLink:…%7D` links, which 17.8 resolves
- uSync: logs the server role at startup. 17.8 elects the role before the startup import, so on load-balanced sites using election only the SchedulingPublisher runs it (checked with two sites sharing a SQLite DB)
- uSync: dashboard SignalR hub auto-reconnects with a capped backoff and a fresh token per reconnect
- uSync: a content key change now also clears the old key's URL alias rows
- Ran the test suite against the 17.8.0-rc packages, and on 17.8.0-rc checked the #1097 block variance scenario and a backoffice-only site without `AddWebsite()`
- Merged all four into v17/17.5.0; release PR to v17/main is open

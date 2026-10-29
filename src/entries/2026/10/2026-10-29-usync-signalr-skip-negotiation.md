---
title: "uSync: SignalR skip negotiation support"
date: 2026-10-29T14:30:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- v17: SignalR client now respects Umbraco's `ClientShouldSkipNegotiation` setting (Umbraco 17.5.0+), connecting over WebSockets without the negotiate call that 405'd ([#1169](https://github.com/KevinJump/uSync/pull/1169), fixes [#1170](https://github.com/KevinJump/uSync/issues/1170))
- v17: added a `GetConnectionId` hub method so the client still gets its connection id when negotiation is skipped, so per-item progress keeps flowing
- v17: SignalR context stops the old connection before reconnecting and catches `start()` failures
- Forward-ported to v18 ([#1171](https://github.com/KevinJump/uSync/pull/1171)) and v19 ([#1172](https://github.com/KevinJump/uSync/pull/1172)); v19 keeps its cookie-only auth
- Closed [#1152](https://github.com/KevinJump/uSync/issues/1152) (v19 legacy-flow migrators), done in [#1155](https://github.com/KevinJump/uSync/pull/1155)

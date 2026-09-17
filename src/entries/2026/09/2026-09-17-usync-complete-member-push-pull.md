---
title: "uSync.Complete: member push/pull, safer server sync, v17.4.3 release, and server-affinity SignalR fixes"
date: 2026-09-17T09:00:00
---

- uSync.Complete: added push/pull menu actions for Members and Member Groups (previously only doctypes, data types, and other settings entities had them) — server-side support already existed, just needed the client-side entity action manifest wiring plus IMember/IMemberGroup localization labels
- uSync.Complete: merged the change as PR #67 and triggered a nightly pre-release build
- uSync.Publisher: Sync Servers action now opens a multi-select server-picker dialog so you can choose which servers to push settings to, instead of always syncing every configured server
- uSync.Publisher: fixed PushSettings sending only the target servers as the settings payload — the receiving server treated that as the definitive list and deleted every other server it knew about, so syncing to just one server wiped the rest
- uSync.Complete: merged 5 dependabot PRs (vite bumps across the 4 client packages, Microsoft.NET.Test.Sdk)
- uSync.Complete: cut release v17.4.3, published to NuGet and wrote public [release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v17.4.3)
- uSync.Complete: fixed the `feature/server-affinity` PR build failing in CI — `Directory.Packages.props`'s `CentralPackageFloatingVersionsEnabled` floated the pinned `jumoo.processing` nightly build up to a same-named stable release on nuget.org, because CI's `NuGet.Config` never actually exposed the Jumoo nightly feed (only worked locally via a global config); activated the feed in-repo with package source mapping and reverted the unnecessary bracket-pinning
- uSync.Publisher: found the server-to-server SignalR bridge was still taking 15s to fail per step despite a 3s timeout — SignalR's `HandshakeTimeout` runs independently of the `CancellationToken` passed to `StartAsync`; the deeper cause was `SyncAffinityStore`'s shared cookie container making the first hub attempt (no affinity cookie) behave differently from every attempt after (cookie now sticks it to a node that connects but never completes the handshake)
- uSync.Publisher: added a per-session cache in `HubClientBridge` so a hub connection already known unreachable this session is skipped instead of retried on every remaining step, dropped the default timeout to 1s now that a failure only costs once per session, and rewrote the warning to explain the impact and link the docs
- uSync.Publisher: added a `CheckServerSignalR` endpoint and a warning banner on the server config page, so a broken hub connection shows up when configuring a server instead of only in the logs mid-publish
- jumoo-docs: [PR #169](https://github.com/Jumoo/jumoo-docs/pull/169) documents the new server-affinity/load-balancing settings (`AffinityEnabled`, `AffinityCookieNames`, `AffinityFailFast`, shared working folder, `X-uSync-Node` header) and recommends turning `ServerToServerHub` off for load-balanced setups

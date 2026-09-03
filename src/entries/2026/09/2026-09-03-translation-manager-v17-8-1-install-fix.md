---
title: "Translation Manager: diagnosed and fixed the v17.8.0 install bug"
date: 2026-09-03T17:15:00
---

- Translation Manager: tracked down why v17.8.0's core package shipped with unused ASP.NET Core Mvc/OpenApi references, breaking installs on some sites — root cause was a floating `dotnet-version: "10.0.x"` in release.yml resolving a different SDK patch on release day
- pinned the exact .NET SDK via `global.json`, added `packages.lock.json` repo-wide for deterministic restores
- found and fixed a separate footgun along the way: a local "Local" NuGet feed was shadowing nuget.org packages under identical version numbers with different content
- verified with a throwaway `v17.8.1-alpha01` prerelease, confirmed the published DLL was clean, then shipped [`v17.8.1`](https://www.nuget.org/packages/Jumoo.TranslationManager/17.8.1) for real
- updated the internal changelog and the customer-facing changelog/release on the companion `Jumoo.TranslationManager.Issues` repo

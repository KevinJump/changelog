---
title: "jumoo-context: local package installs on test sites"
date: 2026-11-06T13:26:00
---

- `New-TestSite -LocalPackages <folder>`: writes the site a `NuGet.Config` with package source mapping, so packages in the folder come from it and everything else from nuget.org, and pins a local package to its packed version
- `/full-test` uses it for local builds. Fixes restores that floated to the next major (NU1107) because the case-sensitive `Testing` folder ignored a lowercase `nuget.config`

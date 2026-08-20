---
title: "PowerToys: scaffolded the package skeleton"
date: 2026-08-20T17:34:00
---

- PowerToys: scaffolded the Umbraco 17 package skeleton - RCL package project with a Vite/TS client, a test site, and CI/CD workflows
- PowerToys: adopted Xliff.Connector's repo conventions - code-based backoffice manifest registration (`IPackageManifestReader`) instead of `umbraco-package.json`, GitVersion, Directory.Build.props, SECURITY.md/CODE_OF_CONDUCT.md, and NuGet trusted publishing (OIDC) for releases
- PowerToys: renamed the base branch to `v17/main` (a branch per Umbraco major)
- PowerToys: added a `powerToy` extension type so packages can register dashboard tools, following Umbraco core's own pattern for custom extension types - dashboard renders each one in a uniform card with an icon/name header and an enable/disable toggle
- PowerToys: created the private GitHub repo and pushed the work
- PowerToys: added a shared `PowerToyService`/`UmbPowerToyContext` layer (backed by Umbraco's key/value store) so power toys get enabled/disabled state and get/save settings for free, instead of each building its own plumbing - gated behind the same `SectionAccessSettings` policy Umbraco itself uses for the Settings section
- PowerToys: added a default power toy box (renders the manifest's description when no custom element is declared) and a shared sidebar modal a power toy can open on click by declaring `meta.modal`, with a Cancel button - a power toy can now be nothing but a manifest
- PowerToys: added a `PowerToyEnabled` condition any manifest can use to gate on a power toy's enabled state, and a `Navbar Clock` power toy (pure manifest, no element) to prove it out - a header app clock that only appears while its power toy is switched on, requiring `UmbPowerToyContext` to become a `globalContext` with a reactive `observeEnabled()`

---
title: "PowerToys: scaffolded the package skeleton"
date: 2026-08-20T17:34:00
---

- PowerToys: scaffolded the Umbraco 17 package skeleton - RCL package project with a Vite/TS client, a test site, and CI/CD workflows
- PowerToys: adopted Xliff.Connector's repo conventions - code-based backoffice manifest registration (`IPackageManifestReader`) instead of `umbraco-package.json`, GitVersion, Directory.Build.props, SECURITY.md/CODE_OF_CONDUCT.md, and NuGet trusted publishing (OIDC) for releases
- PowerToys: renamed the base branch to `v17/main` (a branch per Umbraco major)
- PowerToys: added a `powerToy` extension type so packages can register dashboard tools, following Umbraco core's own pattern for custom extension types - dashboard renders each one in a uniform card with an icon/name header and an enable/disable toggle
- PowerToys: created the private GitHub repo and pushed the work

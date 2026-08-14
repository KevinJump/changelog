---
title: Repo standards and CI/CD for Google.Connector
date: 2026-08-14T07:56:00
---

- Google.Connector: added repository standards and CI/CD templated from Xliff.Connector — LICENSE, README, CHANGELOG, SECURITY, CODE_OF_CONDUCT, editorconfig, global.json, Directory.Build.props, GitVersion.yml, dependabot, issue/PR templates, and CI workflows (PR build, package build, release, CodeQL)
- Google.Connector: fixed google-client's package-lock.json — ~346 packages had resolved from the Azure nightly npm feed instead of npmjs, which would have broken `npm ci` in CI
- Google.Connector: added missing `.prettierrc` (`endOfLine: auto`) — `npm run format` was failing on every file against the CRLF checkout
- Xliff.Connector & Google.Connector: capped dependabot so it can't suggest jumping past each branch's Umbraco major, and pinned typescript below 6 until hey-api/openapi-ts supports newer majors

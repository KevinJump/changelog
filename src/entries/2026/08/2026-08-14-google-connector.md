---
title: "Google.Connector: repo standards, v3 migration, batch translation + beta release"
date: 2026-08-14T07:56:00
---

- Google.Connector: added repository standards and CI/CD templated from Xliff.Connector — LICENSE, README, CHANGELOG, SECURITY, CODE_OF_CONDUCT, editorconfig, global.json, Directory.Build.props, GitVersion.yml, dependabot, issue/PR templates, and CI workflows (PR build, package build, release, CodeQL)
- Google.Connector: fixed google-client's package-lock.json — ~346 packages had resolved from the Azure nightly npm feed instead of npmjs, which would have broken `npm ci` in CI
- Google.Connector: added missing `.prettierrc` (`endOfLine: auto`) — `npm run format` was failing on every file against the CRLF checkout
- Xliff.Connector & Google.Connector: capped dependabot so it can't suggest jumping past each branch's Umbraco major, and pinned typescript below 6 until hey-api/openapi-ts supports newer majors
- Google.Connector: migrated to Cloud Translation v3 (Advanced), dual-mode credentials — API key (v2) still works untouched, pasting a service account JSON switches a connector over to v3
- added glossaries (auto-match + explicit mappings, us-central1 only), model selection (NMT/Translation LLM), regional/multi-regional endpoint selection
- fixed a language-code truncation bug that broke zh-Hant/pt-BR/etc, and a broken CanTranslate check that returned false for almost every real culture
- restructured into Models/Services/Api/Boot; the Google client now lives in a long-lived singleton instead of being rebuilt per job — sets up phase 2 (batch translation)
- bumped Jumoo.TranslationManager.Connectors 17.0.0 → 17.5.3
- opened PR #3
- Google.Connector: added batch translation via Cloud Translation v3's batchTranslateText, backed by a Google Cloud Storage bucket
- chased a real PERMISSION_DENIED through Google IAM — the fix was granting the connector's own service account `roles/storage.admin` on the bucket, not just object-level access; also fixed an invalid mime_type on the batch request
- wrote up a BATCH-SETUP.md guide for the GCS/IAM setup, since it took a lot of back-and-forth to get right
- released [`v17.1.0-beta`](https://www.nuget.org/packages/Jumoo.TranslationManager.Google/17.1.0-beta) to NuGet and rewrote the README for the whole v3/batch migration

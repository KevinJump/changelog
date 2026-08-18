---
title: Jumoo.TranslationManager.Automate: built and released v17.0.0-rc1
date: 2026-08-18T09:00:00
---

**Repo:** [Jumoo/Jumoo.TranslationManager.Automate](https://github.com/Jumoo/Jumoo.TranslationManager.Automate)

- Built Translation Manager actions and triggers for Umbraco Automate from scratch: translateContent, checkJob, and approveJob actions, plus jobSubmitted/jobReceived/jobApproved/jobPublished triggers
- Added loop protection (operation gate + origin-behaviour settings) so an approve/publish step can't re-trigger its own automation
- 66 unit tests, a dev site, and CI/CD workflows adapted from uSync.Automate
- Released [`v17.0.0-rc1`](https://www.nuget.org/packages/Jumoo.TranslationManager.Automate/17.0.0-rc1) to NuGet

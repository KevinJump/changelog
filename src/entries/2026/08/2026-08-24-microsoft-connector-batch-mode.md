---
title: "Microsoft.Connector: ask-user batch mode, submitted-view debug info, and v17.1.0/v18.1.0 releases"
date: 2026-08-24T09:20:00
---

- Added a third "Submit as Batch" option — Ask user (asked at translation time) — matching the DeepL connector's pattern; pending view shows a "Send as Batch" toggle when selected
- Swapped remaining `uui-checkbox` controls for `uui-toggle` in the config view
- Added a debug button to the submitted view that reveals the job's raw `providerProperties` as JSON
- Added a green "resolved from memory" banner for batch jobs where everything came from local translation memory (no request sent to Microsoft)
- Merged PR #8, cleaned up the `feature/batch-mode-ask-user` branch
- Released [`v17.1.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.Microsoft/17.1.0) to NuGet (the batch-mode/debug-info work above)
- Released [`v18.1.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.Microsoft/18.1.0) to NuGet

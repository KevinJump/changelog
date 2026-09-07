---
title: "Jumoo.TranslationManager.AI: click-tested §2 prompt config, cleared Dependabot alerts"
date: 2026-09-07T11:34:00
---

- Marked the §2 prompt-configuration slice (token palette, presets, resolved-prompt preview) as click-tested against a live backoffice in the improvement notes
- Resolved all 23 open Dependabot alerts in the ai-client — bumped vite to v6.4.3 for fixed esbuild/rollup, added npm overrides for js-yaml and dompurify (both pinned by transitive deps that haven't republished the fix yet), and removed the dead vite-plugin-static-copy plugin, whose only configured target never matched a real file in the repo's history and started failing the build under v2's stricter behaviour

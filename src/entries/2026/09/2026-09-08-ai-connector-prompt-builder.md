---
title: "Jumoo.TranslationManager.AI: Prompt Builder modal for the AI connector"
date: 2026-09-08T08:25:00
---

- Jumoo.TranslationManager.AI: added a "Prompt Builder" modal — sectioned prompt editor (Role, Tone & style, read-only Core rules, a reserved Terminology slot for future glossary support, and Additional) replacing the inline system-prompt textarea/presets/token-chips box
- "Edit raw prompt" drops to a single textarea for direct editing, with "Reset to sections" (confirm-before-overwrite) to switch back — deliberately doesn't try to re-parse raw text into sections
- Main config view now shows the prompt as a single readonly property row (same shape as Translation Memory Mode) with a summary and "Open Prompt Builder" button, instead of a separate collapsible box
- Found and fixed a real persistence bug during click-testing: the shared SaveSettings endpoint silently drops any settings key not part of the generated AiOptions shape, so the new prompt sections had to live inside the existing free-form `additional` dict rather than as a sibling key
- Merged via #43

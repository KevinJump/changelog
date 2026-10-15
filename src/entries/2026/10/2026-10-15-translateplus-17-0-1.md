---
title: "TranslatePlus connector: 17.0.1"
date: 2026-10-15T14:41:00
---

- TranslatePlus (Publicis): released `v17.0.1` to [NuGet](https://www.nuget.org/packages/Jumoo.TranslationManager.Publicis), as is, without waiting for the customer feedback
- Logs why job items aren't collected: Information for empty orders and items not ready yet, Warning when no file comes back or the translation fails to load
- `IsReadyStatus` uses the `PublicisStatus` enum instead of 2 and 3

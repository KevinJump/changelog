---
title: "jumoo-context: secrets register cleanup and test-site script improvements"
date: 2026-09-18T14:00:00
---

- added calendar reminders in the Jumoo Reminders calendar for the 5 expiring secrets in secrets-register.md, per issue #11
- corrected secrets-register.md as issues #7, #8, #9, #10 got fixed upstream (dead AZURE_ARTIFACTS_PAT/NUGET_API_KEY/NUGET_TOKEN secrets, leftover KevinJump/uSync environments) and closed all four
- closed #23 after confirming Passthrough.Connector, Google.Connector, and KevinJump/uSync all now have release.yml on their live branches
- renamed seed-corpus to SeedData and restructured it to mirror a site's own root, simplifying Copy-SeedFolder to a single robocopy and Reset-TestSite to only wipe umbraco/Data
- added an allProperties template as the default for seeded content types, so seed sites render every property generically regardless of content type
- added -Code, .slnx creation, and uSync.Complete publisher-settings wiring to New-TestSite

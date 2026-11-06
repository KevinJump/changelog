---
title: "Translation Manager 17.11.0"
date: 2026-11-06T14:13:00
---

- Released [`17.11.0`](https://www.nuget.org/packages/Jumoo.TranslationManager.Core/17.11.0)
- Translate in place: with `inPlaceTranslation` on, a document is translated where it stands, with no translation set
- Resend a job's notification emails from a bell button in the job footer
- Temporary licence offered when the licence key is for an older version. A licence close to expiry is no longer blanked when the renewal check finds no new key
- Clone to Language now clones culture-variant Block List, Block Grid, Single Block and rich text blocks, nested blocks included, and invariant block properties on variant pages
- Settings, licence, connector and translation set pages save for anyone with Settings section access, not only "Manage translations"
- Quick translate button shows in the Languages box again
- Backoffice client authenticates through `configureClient`. Also ships the translation memory performance work and job name fixes from 3 Nov
- Polly.Core 8.9.0 (#144). Removed the CodeQL workflow, which could never upload on a private repo without Code Security (#168, forward-ported in #169)

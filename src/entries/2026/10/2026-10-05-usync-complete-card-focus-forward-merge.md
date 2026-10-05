---
title: "uSync.Complete: content browser card focus, v17 to v18 forward merge"
date: 2026-10-05T14:44:00
---

- uSync.Complete: Publisher content browser cards no longer draw a focus ring over the Compare button when tabbing through card view
- Cards with nothing to open drop the dead tab stop, so tab goes card, then Compare
- Sync progress fixes merged to v17: push/pull progress updates now reach the browser, and the first step says what it is doing
- Forward merged v17/main into v18/main: seven fixes, test dependency bumps (NUnit 5, Moq, coverlet) and the dependabot nightly feed entry
- Kept v18's own npm versions where the dependabot bumps conflicted

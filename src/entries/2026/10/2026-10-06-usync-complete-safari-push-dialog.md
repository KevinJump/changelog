---
title: "uSync.Complete: push dialog fix for Safari 26.4"
date: 2026-10-06T09:35:00
---

- uSync.Complete: the Publisher "Push to server" button now opens its dialog on Safari 26.4, where it was dimming the page and showing nothing ([uSync#1110](https://github.com/KevinJump/uSync/issues/1110))
- Cause was a `height: 100%` host inside an auto-height `<dialog>`; WebKit 26.4 resolves that to zero, 26.6 doesn't
- Dialog is now sized from a `dialog` attribute on the host instead of an injected `<style>` block; sidebar mode unchanged
- Reproduced with a static copy of the dialog in Playwright WebKit 26.4 (Playwright 1.59.1) and 26.6
- Pushed `17.5.0-prerelease.34` to the nightly feed for a BrowserStack check
- Forward merged v17/main into v18/main with the fix, as a merge commit

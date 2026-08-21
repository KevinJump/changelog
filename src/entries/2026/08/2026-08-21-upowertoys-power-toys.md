---
title: "uPowertoys: six new power toys"
date: 2026-08-21T10:21:00
---

- uPowertoys: added a Dashboard Manager power toy - lists installed dashboards, lets you hide/restore them from a modal
- uPowertoys: added a generic savable-modal pattern to the shared power toy modal (opt-in Save button, content-owned save())
- uPowertoys: added a settings modal to the Navbar Clock power toy - toggle date/time, pick a locale-aware display style
- uPowertoys: added a Login Customizer power toy - login screen background/logo images (with a media-picker), password-reset toggle, custom CSS, and per-day-of-week greeting text
- uPowertoys: added a Help Menu Editor power toy - hide built-in help menu links, add custom ones (name/URL/icon), or disable the help menu completely; implemented client-side via the extension registry so it applies live with no backend changes
- uPowertoys: fixed the Help Menu Editor power toy's enable/disable toggle not reverting menu changes when switched off
- uPowertoys: added an Environment Indicator power toy - define environments by name/regex/colour, colours the backoffice header to match the current URL, optionally labels it with a bordered name pill ordered last in the header
- uPowertoys: fixed clicking an environment row not reopening it for editing - `uui-ref-node` stops propagation on its internal click and fires its own `open` event instead
- uPowertoys: added a Theme Maker power toy - lists installed backoffice themes with per-theme show/hide toggles, and lets you add/edit custom themes via a colour-picker sidebar covering the key semantic colour variables (surface, text, header, interactive, borders, status)
- uPowertoys: shipped four ready-made accent themes (red/green/blue/orange) based on the Material Design palette, as plain static CSS files registered like traditional themes so they show up alongside built-ins and can be toggled off
- uPowertoys: noted in Theme Maker that the Environment Indicator power toy overwrites a theme's header colour while an environment match is active

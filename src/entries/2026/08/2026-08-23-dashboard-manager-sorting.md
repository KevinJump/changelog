---
title: "uPowertoys: Dashboard Manager drag-and-drop sorting"
date: 2026-08-23T08:10:00
---

**Repo:** [Jumoo/umbraco.community.powertoys](https://github.com/Jumoo/umbraco.community.powertoys)

- Dashboard Manager power toy: added drag-and-drop sorting of dashboards within each backoffice section, overriding the dashboard's registered manifest weight
- Added a per-section "Reset order" button (only shown once that section has a custom order) to revert back to the dashboard's original registered order
- Fixed the manager's default listing to sort by registered weight instead of alphabetically, so it matches the real on-screen dashboard order before any custom order is set
- Opened [PR #47](https://github.com/Jumoo/umbraco.community.powertoys/pull/47)

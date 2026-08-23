---
title: "uPowertoys: Dashboard Manager sorting + docs site"
date: 2026-08-23T08:10:00
---

**Repo:** [Jumoo/umbraco.community.powertoys](https://github.com/Jumoo/umbraco.community.powertoys)

- Dashboard Manager power toy: added drag-and-drop sorting of dashboards within each backoffice section, overriding the dashboard's registered manifest weight
- Added a per-section "Reset order" button (only shown once that section has a custom order) to revert back to the dashboard's original registered order
- Fixed the manager's default listing to sort by registered weight instead of alphabetically, so it matches the real on-screen dashboard order before any custom order is set
- Opened [PR #47](https://github.com/Jumoo/umbraco.community.powertoys/pull/47)
- Tagged and published [`v17.0.0-rc2`](https://github.com/Jumoo/umbraco.community.powertoys/releases/tag/v17.0.0-rc2) on GitHub, triggering the release workflow to push to NuGet
- Added a Jekyll docs site under `docs/` for GitHub Pages: an overview page, install guide, and a page per power toy, with real screenshots from a running instance
- Configured the docs site for a custom domain (`powertoys.jumoo.co.uk`) via a `CNAME` file and Jekyll `url`/`baseurl` config
- Opened [PR #48](https://github.com/Jumoo/umbraco.community.powertoys/pull/48)
- Resolved a merge conflict in `docs/CNAME` after GitHub auto-committed its own CNAME file to `v17/main` when the custom domain was set in Pages settings

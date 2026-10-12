---
title: "Translation Manager: dates shown in local time"
date: 2026-10-12T16:46:00
---

- Translation Manager: fixed backoffice dates (job nodes table, job list, history, versions) showing UTC instead of the user's local time. Dates were stored as UTC but came back from NPoco as `Unspecified`, so they serialised without an offset.
- Added a UTC `DateTime` JSON converter on Translation Manager's own named JSON options (backoffice options + converter), so every Translation Manager API date gets a `Z` without touching Umbraco's or other packages' endpoints. This replaces per-field fixes in the mappers.
- Standardised date writes on `DateTime.UtcNow` (repositories, job workflow, background items + health check)

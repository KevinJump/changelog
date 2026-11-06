---
title: "Maintenance Mode: ws and js-yaml security updates"
date: 2026-11-06T16:01:00
---

**Repo:** [Jumoo/Our.Umbraco.MaintenanceMode](https://github.com/Jumoo/Our.Umbraco.MaintenanceMode)

- `ws` 7.5.13 ([#128](https://github.com/Jumoo/Our.Umbraco.MaintenanceMode/pull/128)), forward-ported to v18 ([#132](https://github.com/Jumoo/Our.Umbraco.MaintenanceMode/pull/132))
- npm `overrides` entry forces `js-yaml` `^4.3.2`, since hey-api's ref parser pins the vulnerable 4.2.0 ([#133](https://github.com/Jumoo/Our.Umbraco.MaintenanceMode/pull/133))

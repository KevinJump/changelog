---
title: "jumoo-workflow: release skill notes"
date: 2026-09-24T12:17:00
---

- jumoo-workflow: `/release` now waits for `release.yml`, then edits the workflow's draft release rather than creating its own
- jumoo-workflow: release notes for private repos now come from the changelog entry instead of GitHub's generated PR list. Prereleases are marked as such

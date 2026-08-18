---
title: Moved changelog site nav into the header
date: 2026-08-15T08:05:00
---

**Repo:** [KevinJump/changelog](https://github.com/KevinJump/changelog)

- Duplicated the footer site nav (changes / releases / versions) into the header, on its own line above the title, so it's visible without scrolling and doesn't crowd the title/search row
- Fixed a CSS source-order bug where `.site-nav`'s `justify-content: center` was overriding `.site-nav-top`'s `flex-end`, leaving the header nav centered instead of right-aligned

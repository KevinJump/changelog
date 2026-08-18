---
title: Migrated the Jumoo blog to Eleventy
date: 2026-08-16T10:21:00
---
**Repo:** [Jumoo/jumoo-blog](https://github.com/Jumoo/jumoo-blog)

- Rebuilt blog.jumoo.co.uk on Eleventy, migrating 187 posts + images from the old Hexo site, preserving permalinks (/YYYY/slug/), tags, and archives exactly
- Rebuilt styling in plain CSS (no Bootstrap/FontAwesome/CDN fonts), matched original visual identity pixel-for-pixel against the live site
- Added a mobile hamburger nav toggle (not on the original site)
- Fixed archive year heading structure, added post counts to sidebar archive links
- Created the GitHub repo (public — GitHub Pages doesn't support private repos on the Jumoo org's Free plan), set up CI/CD: PR-required branch protection on main, CI build check, deploy-on-merge to GitHub Pages
- Added `npm run new-post` script to scaffold new post files + branches
- Cut over blog.jumoo.co.uk DNS from the old host to GitHub Pages

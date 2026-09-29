---
title: "uSync.Forms: vite 8.3.1 bumps and TypeScript ignore"
date: 2026-09-29T10:40:00
---

**Repo:** [KevinJump/uSync.Forms](https://github.com/KevinJump/uSync.Forms)

- Merged the dependabot vite 8.2.2 → 8.3.1 PRs for both clients on v17/main ([#61](https://github.com/KevinJump/uSync.Forms/pull/61), [#62](https://github.com/KevinJump/uSync.Forms/pull/62)); squash is disabled on the repo, so merge commits
- Added a dependabot ignore for TypeScript major bumps in both npm projects, since @hey-api doesn't support TypeScript 7 yet ([#63](https://github.com/KevinJump/uSync.Forms/pull/63))
- Checked v17 against v18 for a forward port: no forward-merge commit exists, so the baseline was the v18 CI/repo catch-up commit, and vite was the only outstanding change; the v17/v18 dependency differences are deliberate and stay

---
title: "uSync.TreeBranch: worktree test findings filed"
date: 2026-10-30T12:12:00
---

**Repo:** [KevinJump/uSync.TreeBranch](https://github.com/KevinJump/uSync.TreeBranch)

- uSync.TreeBranch: filed issues from a parallel-worktree run of `17.0.0-alpha01`
  - [#5](https://github.com/KevinJump/uSync.TreeBranch/issues/5) worktree sites boot as a load-balancing Subscriber (copied DB keeps main's `umbracoServer` row)
  - [#6](https://github.com/KevinJump/uSync.TreeBranch/issues/6) README: exclude `.claude/**` from the csproj build; worktree media uploads land in main
  - [#7](https://github.com/KevinJump/uSync.TreeBranch/issues/7) parallel branches adding allowed children to the same parent always conflict on `SortOrder`
  - [#8](https://github.com/KevinJump/uSync.TreeBranch/issues/8) commit import rewrites template views, leaving the working tree dirty
  - [#9](https://github.com/KevinJump/uSync.TreeBranch/issues/9) "copied Umbraco to Umbraco" log line should show the SQLite paths

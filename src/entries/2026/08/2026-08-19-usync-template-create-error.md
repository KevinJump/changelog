---
title: "uSync: surface real error on template create failure"
date: 2026-08-19T15:30:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Fixed [#1044](https://github.com/KevinJump/uSync/issues/1044): template import failures reported a hardcoded "Failed to create template" with a null exception, hiding the real cause — especially bad on IIS/Production where it only reproduced in that environment
- `TemplateSerializer` now surfaces Umbraco's real `TemplateOperationStatus` in the message and wraps it in an exception, matching the "don't discard save-attempt results" fix already applied elsewhere in #1039/#1041
- Removed a dead/unreachable duplicate null check left over from an earlier refactor
- Added test coverage for the create failure and success paths

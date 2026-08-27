---
title: "uSync.Community.DataTypeSerializers: revived Try-pattern serializers"
date: 2026-08-27T11:13:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- uSync.Community.DataTypeSerializers: converted `SyncDataTypeSerializerBase`'s guid/path lookups to a `Try*` pattern instead of relying on empty-string/null as failure sentinels
- Updated `ContentPickerConfigSerializer` and `MediaPicker3ConfigSerializer` to map `startNodeId` to/from a portable entity path on export/import
- Updated `MNTPickerConfigSerializer` to map `startNode.id` and `startNode.dynamicRoot.originKey` (the latter only when present)
- Added `RichTextConfigSerializer` to map `mediaParentId`, filling a gap left by uSync.Core's built-in `RichTextEditorMigratingSerializer`; copies the config dictionary defensively before mutating since that serializer can hand back a read-only `ImmutableSortedDictionary`
- Relates to [issue #1051](https://github.com/KevinJump/uSync/issues/1051), merged via [PR #1052](https://github.com/KevinJump/uSync/pull/1052)

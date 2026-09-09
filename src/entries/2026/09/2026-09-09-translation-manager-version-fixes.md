---
title: "Translation Manager: v17→v18 forward-port (Glossary) and version-select/diagnostics fixes"
date: 2026-09-09T12:09:00
---

- fixed a bug where new translation jobs defaulted to published content instead of the latest edited version when a set's "hide version choice" was on — includeUnpublished now defaults to true regardless, hideVersion only controls whether the editor can override it
- added connector version display to the diagnostics view, reading it the same way the core version is read for consistency
- forward-ported v17 into v18: the Glossary feature (global terminology list with per-language values and a "do not translate" flag, CSV/TBX import-export, connector opt-in via GlossaryMachineConnectorBase/GlossaryBatchableMachineConnectorBase), plus the two fixes above and nightly-build CI changes
- hand-merged the OpenAPI-generated TS client (sdk.gen.ts/types.gen.ts/index.ts) since v18's client had moved to a newer @hey-api/openapi-ts generator shape than v17's
- cleaned up merged branches after the forward-port PR landed
- added an IGlossaryAwareProvider marker interface so glossary-capable connectors are discoverable at runtime, exposed to the frontend as `supportsGlossary`
- added a dismissable banner to the Glossary page listing which active connectors actually support it
- fixed missing uui-select/uui-input/uui-toggle labels causing backoffice console warnings across the Glossary toolbar and its Add Term/Import/Export modals
- fixed a "Context could not be found" console warning from the send-to-translate/simple-translate entity-action conditions racing the app's context-provide event

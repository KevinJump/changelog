---
title: "uSync: template content now comes from the template service, and the compiled-views fallback actually works"
date: 2026-09-01T11:02:00
---

**Repo:** [KevinJump/uSync](https://github.com/KevinJump/uSync)

- Template import now asks Umbraco's `ITemplateService` for the file content first, before falling back to the view filesystem and then to a placeholder when the views are compiled into the site
- Fixed the check on that new call: `GetFileContentStreamAsync` never returns null, it hands back `Stream.Null` for a missing file - so we always took the "found it" branch, read an empty string, and made both fallbacks below it unreachable. A missing template file was being imported as an empty template instead of failing
- Fixed the placeholder we give Umbraco for a compiled view: `TemplateContentParserService` needs a trailing semi-colon to parse the `Layout` value, so `{ Layout = "master" }` never matched and the master template was never set. Now written as valid razor, with `Layout = null;` for root templates
- Aligned `ViewPath` (and the handler's copy) with how Umbraco actually names the view file - the alias verbatim, per `TemplateRepository.SetVirtualPath` - instead of stripping spaces, so we don't look for or delete the wrong file
- Dropped the `CleanseNode` override: it removed a `Content` element but the element is `Contents`, so it had never done anything. `TemplateTracker` tracks `/Contents` explicitly, so making it work would have put the change hash and the tracker in disagreement
- Tidied the same files - unused `_shortStringHelper`, dead null checks on injected services, `GetContentFromFile` made private, content fetch moved into the create branch so updates stop paying for a read they discard
- Added tests for creating a template with no file on disk, asserting the placeholder parses back to the parent alias using Umbraco's own `TemplateContentParserService`; verified they fail against the pre-fix code
- Merged via [PR #1059](https://github.com/KevinJump/uSync/pull/1059)

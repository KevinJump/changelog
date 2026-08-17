---
title: TranslationManager database-backed integration tests
date: 2026-08-17T18:50:00
---

- TranslationManager: added `Jumoo.TranslationManager.IntegrationTests` — a SQLite-backed suite on `Umbraco.Cms.Tests.Integration` that boots a real Umbraco host, runs TM migrations and exercises services against persisted data; 78 tests across host/schema, sets, nodes, job lifecycle, connector pipeline, approval write-back, background processing and unlicensed limits
- Harness gotchas for package authors: Umbraco's `GlobalSetupTeardown` is a `[SetUpFixture]` inside the package assembly, which NUnit never discovers from a consuming project (so test config and DB teardown are done locally); `TranslationComposer` isn't picked up either since the test host builds its TypeLoader from the test assembly, so `AddTranslations()` is called explicitly; migrations only run with `Boot = true`
- Test host presents as `localhost`, so a missing licence is promoted to `LicenceStatus.Local` — that's what unblocks multi-set and multi-target-site tests. The resolved licence is a process-wide static, so it's cleared per test, which also made the unlicensed-limit tests possible
- `IRecurringBackgroundJobTrigger<>` and `IClientMessageService` are only registered by the web host — test doubles stand in for both
- Two connector doubles: `FakeTranslationProvider` short-circuits the connector stack for workflow and failure-path tests, `PassthroughTestConnector` extends the real `MachineConnectorBase` so HTML splitting, batching and translation memory are covered
- One `InternalsVisibleTo` added to Core (following the existing pattern) so tests use the real table/action constants and can reset the cached licence; no production code changed
- Follow-up noted: `TranslationJobService.Cancel` and `MachineConnectorBase.SubmitInternal` both walk `job.Nodes` without a null check — fine from the backoffice, which reloads via `GetAsync` first, but the instance `CreateJobAsync` returns will crash them

Commit: `ec6136f` on `v18/main`

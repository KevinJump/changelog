---
title: "Jumoo.Processing: opt-in IProcessingOptions type registry"
date: 2026-09-08T07:55:00
---

- Jumoo.Processing: implemented step 1 of the polymorphic-discriminator fix designed in [#22](https://github.com/Jumoo/Jumoo.Processing/pull/22) (see [2026-09-07 entry](/entries/2026-09-07-translation-manager-usync-processing-conflict/)) — `IProcessingOptionsTypeRegistry`, `IUmbracoBuilder.AddProcessingOptionsType<T>()` and `[ProcessingOptionsDiscriminatorAttribute]`, so a consumer can explicitly register its `IProcessingOptions` type and sidestep the `ITypeFinder` scan that misses it when two physical copies of Jumoo.Processing.Core are loaded
- Zero breaking changes — an unregistered type keeps using the old scan and class-name discriminator, so nothing already persisted in `Jumoo_Pipelines` is affected. Merged in [#24](https://github.com/Jumoo/Jumoo.Processing/pull/24)
- Translation Manager and uSync.Complete adopting the new registration API is tracked as follow-up work

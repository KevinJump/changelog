---
title: QuickFile Stripe-account fix and currency-aware customer lookup
date: 2026-08-13T16:30:00
---

- new-checkout: fixed QuickFile webhook booking payments to the Stripe bank account even when an invoice was paid outside Stripe (no charge on it) — now marks the QuickFile invoice as sent, not paid, and leaves the actual payment to manual bookkeeping
- new-checkout: Stripe customer lookup now matches on email *and* currency, since a Stripe customer is pinned to one currency after their first transaction — a mismatched-currency customer now gets a separate one created instead of reusing the wrong one

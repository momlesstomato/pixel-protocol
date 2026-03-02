---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Catalog & Store
- **Total packets**: 11

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 714 | `REDEEM_VOUCHER_ERROR` | [`catalog.voucher_error`](./0714-catalog-voucher-error.md) | Indicate that voucher redemption failed | `session` | `nitro-1.6.6` |
| 804 | `CATALOG_PAGE` | [`catalog.page`](./0804-catalog-page.md) | Deliver a catalog page's content | `session` | `nitro-1.6.6` |
| 869 | `CATALOG_PURCHASE_OK` | [`catalog.purchase_ok`](./0869-catalog-purchase-ok.md) | Confirm that a purchase was completed successfully | `session` | `nitro-1.6.6` |
| 1032 | `CATALOG_PAGE_LIST` | [`catalog.index`](./1032-catalog-index.md) | Deliver the catalog page tree | `session` | `nitro-1.6.6` |
| 1404 | `CATALOG_PURCHASE_ERROR` | [`catalog.purchase_error`](./1404-catalog-purchase-error.md) | Indicate that a purchase failed | `session` | `nitro-1.6.6` |
| 1517 | `GIFT_RECEIVER_NOT_FOUND` | [`catalog.gift_receiver_not_found`](./1517-catalog-gift-receiver-not-found.md) | Indicate that the gift recipient was not found | `session` | `nitro-1.6.6` |
| 1866 | `CATALOG_PUBLISHED` | [`catalog.published`](./1866-catalog-published.md) | Notify that the catalog has been updated | `session` | `nitro-1.6.6` |
| 2234 | `GIFT_WRAPPER_CONFIG` | [`catalog.gift_wrapping_config`](./2234-catalog-gift-wrapping-config.md) | Deliver available gift wrapping options | `session` | `nitro-1.6.6` |
| 2347 | `BUNDLE_DISCOUNT_RULESET` | [`catalog.bundle_discount_ruleset`](./2347-catalog-bundle-discount-ruleset.md) | Bundle discount ruleset | `session` | `nitro-1.6.6` |
| 3336 | `REDEEM_VOUCHER_OK` | [`catalog.voucher_ok`](./3336-catalog-voucher-ok.md) | Confirm successful voucher redemption | `session` | `nitro-1.6.6` |
| 3770 | `CATALOG_PURCHASE_NOT_ALLOWED` | [`catalog.purchase_not_allowed`](./3770-catalog-purchase-not-allowed.md) | Indicate that the user is not permitted to purchase | `session` | `nitro-1.6.6` |

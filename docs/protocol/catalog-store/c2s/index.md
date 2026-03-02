---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Catalog & Store
- **Total packets**: 10

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 223 | `GET_BUNDLE_DISCOUNT_RULESET` | [`catalog.bundle_discount_ruleset`](./0223-catalog-bundle-discount-ruleset.md) | Get bundle discount ruleset | `session` | `nitro-1.6.6` |
| 339 | `CATALOG_REDEEM_VOUCHER` | [`catalog.redeem_voucher`](./0339-catalog-redeem-voucher.md) | Redeem a voucher code | `session` | `nitro-1.6.6` |
| 412 | `GET_CATALOG_PAGE` | [`catalog.get_page`](./0412-catalog-get-page.md) | Request a specific catalog page's content | `session` | `nitro-1.6.6` |
| 418 | `GET_GIFT_WRAPPING_CONFIG` | [`catalog.get_gift_wrapping_config`](./0418-catalog-get-gift-wrapping-config.md) | Request the available gift wrapping options | `session` | `nitro-1.6.6` |
| 1195 | `GET_CATALOG_INDEX` | [`catalog.get_index`](./1195-catalog-get-index.md) | Request the catalog page tree | `session` | `nitro-1.6.6` |
| 1347 | `GET_IS_OFFER_GIFTABLE` | [`catalog.check_giftable`](./1347-catalog-check-giftable.md) | Check whether a catalog offer can be purchased as a gift | `session` | `nitro-1.6.6` |
| 1411 | `CATALOG_PURCHASE_GIFT` | [`catalog.purchase_gift`](./1411-catalog-purchase-gift.md) | Purchase a catalog item as a gift for another user | `session` | `nitro-1.6.6` |
| 2150 | `MARK_CATALOG_NEW_ADDITIONS_PAGE_OPENED` | [`catalog.mark_catalog_new_additions_page_opened`](./2150-catalog-mark-catalog-new-additions-page-opened.md) | Mark catalog new additions page opened | `session` | `nitro-1.6.6` |
| 2436 | `GET_GIFT` | [`catalog.get_gift`](./2436-catalog-get-gift.md) | Request gift delivery details | `session` | `nitro-1.6.6` |
| 3492 | `CATALOG_PURCHASE` | [`catalog.purchase`](./3492-catalog-purchase.md) | Purchase an item from the catalog | `session` | `nitro-1.6.6` |

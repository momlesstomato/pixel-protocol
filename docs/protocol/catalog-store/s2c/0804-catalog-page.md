---
title: catalog.page
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `804`
- **Header**: `CATALOG_PAGE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a catalog page's content

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page identifier. |
| `catalogType` | `string` | required | Catalog mode string. |
| `layoutCode` | `string` | required | Layout template name. |
| `images` | `string[]` | required | Page image asset names. |
| `texts` | `string[]` | required | Page text strings. |
| `offerCount` | `int32` | required | Number of offers on this page. |
| `offers` | `object[]` | required | Array of offer records. Each contains: `offerId` (int32), `localizationId` (string), `rent` (boolean), `priceCredits` (int32), `priceActivityPoints` (int32), `activityPointType` (int32), `giftable` (boolean), `products` (object[]).<br/> |
| `acceptSeasonCurrencyAsCredits` | `boolean` | required | Whether seasonal currency can substitute credits. |

## Behavior

### Sender
Sent in response to `catalog.get_page` (c2s 412). Contains the layout, offers, and localization for the page.


### Receiver
The client renders the catalog page layout and offer list. Confirmed in GLADIATOR.

## Notes

- No additional notes

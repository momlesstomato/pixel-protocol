---
title: catalog.purchase
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3492`
- **Header**: `CATALOG_PURCHASE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase an item from the catalog

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page of the offer. |
| `offerId` | `int32` | required | Offer identifier. |
| `extraData` | `string` | required | Extra data for personalized items (e.g. pet name, text). |
| `amount` | `int32` | required | Number of items to purchase. |

## Behavior

### Sender
Sent when the user confirms a purchase. The server deducts currency and delivers the item.


### Receiver
The server responds with `catalog.purchase_ok` (s2c 869) on success, `catalog.purchase_error` (s2c 1404) or `catalog.purchase_not_allowed` (s2c 3770) on failure. Confirmed in GLADIATOR.

## Notes

- No additional notes

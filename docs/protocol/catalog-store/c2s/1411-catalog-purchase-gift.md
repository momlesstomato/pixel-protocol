---
title: catalog.purchase_gift
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1411`
- **Header**: `CATALOG_PURCHASE_GIFT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase a catalog item as a gift for another user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page of the offer. |
| `itemId` | `int32` | required | Offer identifier. |
| `extraData` | `string` | required | Extra data (e.g. pet name). |
| `receiverName` | `string` | required | Username of the gift recipient. |
| `giftMessage` | `string` | required | Personal message to include with the gift. |
| `spriteId` | `int32` | required | Gift wrapping paper sprite. |
| `boxId` | `int32` | required | Gift box style identifier. |
| `ribbonId` | `int32` | required | Ribbon style identifier. |
| `showMyFace` | `boolean` | required | Whether to include the sender's avatar face on the gift. |

## Behavior

### Sender
Sent when the user sends a gift to another user. The server wraps the item and delivers it to the recipient.


### Receiver
The server responds with `catalog.purchase_ok` (s2c 869) or an error. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.is_offer_giftable
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `761`
- **Header**: `IS_OFFER_GIFTABLE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate whether a catalog offer can be sent as a gift

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Catalog offer identifier. |
| `isGiftable` | `boolean` | required | Whether the offer can be purchased as a gift. |

## Behavior

### Sender
Sent in response to a giftable check to determine if the gift wrapping UI should be shown.


### Receiver
The client enables or disables the gift wrapping button for the specified offer.

## Notes

- No additional notes

---
title: catalog.limited_offer_appearing_next
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `44`
- **Header**: `LIMITED_OFFER_APPEARING_NEXT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Announce the next limited offer appearance

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appearsInSeconds` | `int32` | required | Seconds until the offer becomes available. |
| `pageId` | `int32` | required | Catalog page where the offer will appear. |
| `offerId` | `int32` | required | Offer identifier. |
| `productType` | `string` | required | Type of product in the offer. |

## Behavior

### Sender
Sent to inform the client of an upcoming limited-time offer.


### Receiver
The client displays a countdown showing when the limited offer will appear.

## Notes

- No additional notes

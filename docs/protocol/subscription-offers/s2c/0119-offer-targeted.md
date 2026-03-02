---
title: offer.targeted
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `119`
- **Header**: `TARGET_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a targeted offer to the player

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Targeted offer identifier. |
| `identifier` | `string` | required | Internal offer string key. |
| `productCode` | `string` | required | Primary product code. |
| `priceCredits` | `int32` | required | Credit cost. |
| `priceActivityPoints` | `int32` | required | Activity point cost. |
| `activityPointType` | `int32` | required | Type of activity points used. |
| `purchaseLimit` | `int32` | required | Maximum number of times this offer can be purchased. |
| `expirationTime` | `int32` | required | Seconds until the offer expires. |
| `title` | `string` | required | Display title. |
| `description` | `string` | required | Offer description text. |
| `imageUrl` | `string` | required | URL of the offer banner image. |
| `iconImageUrl` | `string` | required | URL of the offer icon. |
| `type` | `int32` | required | Offer layout type. |
| `subProductCodes` | `list&lt;string&gt;` | required | Additional product codes included in the offer. |

## Behavior

### Sender
Sent on login or in response to a targeted offer request when one is available.


### Receiver
The client displays the targeted offer overlay with the offer details, products, and pricing.

## Notes

- No additional notes

---
title: catalog.club_gift_info
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `619`
- **Header**: `CLUB_GIFT_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver Habbo Club member gift information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysUntilNextGift` | `int32` | required | Days remaining until the user can claim their next gift. |
| `giftCount` | `int32` | required | Number of available gift options. |
| `gifts` | `object[]` | required | Array of gift offer records. Each contains offer fields plus `isVipGift` (boolean).<br/> |

## Behavior

### Sender
Sent in response to `catalog.get_club_gift_info` (c2s 487) with the available gift offers and the current selection state.


### Receiver
The client renders the gift selection panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.club_offers
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2405`
- **Header**: `CLUB_OFFERS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver available Habbo Club membership offers

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerCount` | `int32` | required | Number of club offers. |
| `offers` | `object[]` | required | Array of club offer records. Each contains: `offerId` (int32), `name` (string), `dayCount` (int32), `monthCount` (int32), `priceCredits` (int32), `pricePoints` (int32), `isVip` (boolean), `pastClubDays` (int32), `pastVipDays` (int32).<br/> |

## Behavior

### Sender
Sent in response to `catalog.get_club_offers` (c2s 3285). Contains all available HC membership packages.


### Receiver
The client renders the club subscription options. Confirmed in GLADIATOR.

## Notes

- No additional notes

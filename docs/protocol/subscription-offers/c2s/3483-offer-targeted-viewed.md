---
title: offer.targeted_viewed
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3483`
- **Header**: `SHOP_TARGETED_OFFER_VIEWED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a targeted offer was viewed in the shop

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Targeted offer identifier. |
| `state` | `int32` | required | View state value. |

## Behavior

### Sender
Sent when the targeted offer dialog is opened or displayed to the player.


### Receiver
The server records the view event for analytics. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.builders_club_subscription
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1452`
- **Header**: `BUILDERS_CLUB_EXPIRED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver Builders Club subscription status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `secondsLeft` | `int32` | required | Seconds remaining on the Builders Club subscription. |
| `furniLimit` | `int32` | required | Current furniture placement limit. |
| `maxFurniLimit` | `int32` | required | Maximum furniture placement limit. |
| `secondsLeftWithGrace` | `int32` | required | Seconds remaining including grace period (optional). |

## Behavior

### Sender
Sent on login or when the Builders Club status changes.


### Receiver
The client updates the Builders Club UI showing remaining time and furniture limits.

## Notes

- No additional notes

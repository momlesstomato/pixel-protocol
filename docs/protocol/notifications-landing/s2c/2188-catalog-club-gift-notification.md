---
title: catalog.club_gift_notification
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2188`
- **Header**: `CLUB_GIFT_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the player that Club gifts are available

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `numGifts` | `int32` | required | Number of available unclaimed Club gifts. |

## Behavior

### Sender
Sent on login or when new Club gifts become available.


### Receiver
The client shows a notification bubble indicating the number of unclaimed gifts.

## Notes

- No additional notes

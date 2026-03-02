---
title: furniture.lovelock_friend_confirmed
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `382`
- **Header**: `LOVELOCK_FURNI_FRIEND_COMFIRMED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the second user confirmed the love lock

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the love lock furniture. |

## Behavior

### Sender
Sent to the initiating user when the invited user confirms their participation in the love lock.


### Receiver
The client progresses the love lock sequence. Confirmed in GLADIATOR.

## Notes

- No additional notes

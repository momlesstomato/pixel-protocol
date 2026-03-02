---
title: room_entities.shout
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2085`
- **Header**: `UNIT_CHAT_SHOUT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a shout message visible to the whole room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | Shout message text. |
| `styleId` | `int32` | required | Chat bubble style identifier. |

## Behavior

### Sender
Sent when the user shouts. Shout messages are visible to all users in the room regardless of chat distance.


### Receiver
The server broadcasts `room_entities.shout` (s2c 1036). Confirmed in GLADIATOR.

## Notes

- No additional notes

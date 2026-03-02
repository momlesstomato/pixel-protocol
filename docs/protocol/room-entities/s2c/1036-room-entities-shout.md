---
title: room_entities.shout
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1036`
- **Header**: `UNIT_CHAT_SHOUT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a shout message from a room unit

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `message` | `string` | required | Shout message text. |
| `gesture` | `int32` | required | Gesture animation. |
| `bubbleStyle` | `int32` | required | Chat bubble style. |
| `urlCount` | `int32` | required | Number of URL items. |
| `urls` | `string[]` | required | URL strings embedded in the message. |
| `messageLength` | `int32` | required | Original message character count. |

## Behavior

### Sender
Sent to all room users when a unit shouts. Shout messages are visible regardless of chat distance.


### Receiver
The client renders the shout bubble with a distinct visual style. Confirmed in GLADIATOR.

## Notes

- No additional notes

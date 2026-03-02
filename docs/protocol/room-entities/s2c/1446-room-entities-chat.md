---
title: room_entities.chat
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1446`
- **Header**: `UNIT_CHAT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a normal chat message from a room unit

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the speaking unit. |
| `message` | `string` | required | Chat message text. |
| `gesture` | `int32` | required | Gesture animation to play alongside the message. |
| `bubbleStyle` | `int32` | required | Chat bubble style identifier. |
| `urlCount` | `int32` | required | Number of URL items following. |
| `urls` | `string[]` | required | URL strings embedded in the message. |
| `messageLength` | `int32` | required | Original message character count. |

## Behavior

### Sender
Sent to nearby users when a unit says a message using normal chat.


### Receiver
The client renders the chat bubble above the unit. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: room_entities.say
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1314`
- **Header**: `UNIT_CHAT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a normal chat message in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | Chat message text. |
| `styleId` | `int32` | required | Chat bubble style identifier. |

## Behavior

### Sender
Sent when the user submits a chat message. Style selects the chat bubble appearance.


### Receiver
The server broadcasts `room_entities.chat` (s2c 1446). Confirmed in GLADIATOR.

## Notes

- No additional notes

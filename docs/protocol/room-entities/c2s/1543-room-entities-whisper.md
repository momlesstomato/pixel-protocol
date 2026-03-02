---
title: room_entities.whisper
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1543`
- **Header**: `UNIT_CHAT_WHISPER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a private whisper to a specific user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `targetName` | `string` | required | Username of the whisper recipient. |
| `message` | `string` | required | Whisper message text. |
| `styleId` | `int32` | required | Chat bubble style identifier. |

## Behavior

### Sender
Sent when the user whispers to another user. The message is visible only to the sender and recipient.


### Receiver
The server delivers `room_entities.whisper` (s2c 2704) to the recipient only. Confirmed in GLADIATOR.

## Notes

- No additional notes

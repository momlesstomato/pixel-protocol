---
title: room_entities.whisper
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2704`
- **Header**: `UNIT_CHAT_WHISPER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a private whisper to the recipient

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the whispering unit. |
| `message` | `string` | required | Whisper message text. |
| `gesture` | `int32` | required | Gesture animation. |
| `bubbleStyle` | `int32` | required | Chat bubble style. |
| `urlCount` | `int32` | required | Number of URL items. |
| `urls` | `string[]` | required | URL strings. |
| `messageLength` | `int32` | required | Original message character count. |

## Behavior

### Sender
Sent only to the whisper recipient when a unit whispers to them.


### Receiver
The client renders the whisper in a muted or private style visible only to the recipient. Confirmed in GLADIATOR.

## Notes

- No additional notes

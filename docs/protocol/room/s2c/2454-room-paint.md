---
title: room.paint
sidebar_position: 41
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2454`
- **Header**: `ROOM_PAINT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room decoration settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | required | Decoration type: `wallpaper`, `floor`, or `landscape`. |
| `value` | `string` | required | Decoration asset identifier string. |

## Behavior

### Sender
Sent during room loading with the room's wallpaper, floor, and landscape decoration identifiers.


### Receiver
The client applies the decoration textures. Confirmed in GLADIATOR.

## Notes

- No additional notes

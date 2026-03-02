---
title: room.door_settings
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1664`
- **Header**: `ROOM_MODEL_DOOR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room entry door position and direction

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `x` | `int32` | required | Door X tile coordinate. |
| `y` | `int32` | required | Door Y tile coordinate. |
| `z` | `string` | required | Door Z height (serialized as string). |
| `direction` | `int32` | required | Avatar spawn direction (0, 2, 4, 6). |

## Behavior

### Sender
Sent during room entry to specify where the avatar should spawn and which direction it should face.


### Receiver
The client positions the user's avatar at the door tile. Confirmed in GLADIATOR.

## Notes

- No additional notes

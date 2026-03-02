---
title: room_entities.walk
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3320`
- **Header**: `UNIT_WALK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Walk the user's avatar to a tile

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `x` | `int32` | required | Target tile X coordinate. |
| `y` | `int32` | required | Target tile Y coordinate. |

## Behavior

### Sender
Sent when the user clicks a walkable tile in the room. The server pathfinds the avatar to the target coordinates.


### Receiver
The server pathfinds and moves the avatar. Confirmed in GLADIATOR.

## Notes

- No additional notes

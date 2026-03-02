---
title: room.blocked_tiles
sidebar_position: 54
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3990`
- **Header**: `ROOM_MODEL_BLOCKED_TILES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the set of blocked tiles in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of blocked tile records. |
| `tiles` | `object[]` | required | Array of blocked tile positions. Each contains: `x` (int32), `y` (int32).<br/> |

## Behavior

### Sender
Sent during room loading to indicate which tiles are permanently blocked for pathfinding purposes.


### Receiver
The client marks the indicated tiles as impassable in the pathfinding grid. Confirmed in GLADIATOR.

## Notes

- No additional notes

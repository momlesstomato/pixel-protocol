---
title: room.save_floor_plan
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `875`
- **Header**: `ROOM_MODEL_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save an updated room floor plan

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `wallHeight` | `int32` | required | Wall height override (-1 to use model default). |
| `hideWalls` | `boolean` | required | Whether walls are hidden. |
| `wallThickness` | `int32` | required | Wall thickness level: -2 to 1. |
| `floorThickness` | `int32` | required | Floor thickness level: -2 to 1. |
| `heightmapString` | `string` | required | The new heightmap encoded as a string where each character represents a tile height level.<br/> |

## Behavior

### Sender
Sent by the room owner after editing the floor plan in the room editor. Contains the new heightmap string and thickness settings.


### Receiver
The server validates the heightmap and persists it. Confirmed in GLADIATOR.

## Notes

- No additional notes

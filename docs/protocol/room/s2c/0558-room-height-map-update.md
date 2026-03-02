---
title: room.height_map_update
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `558`
- **Header**: `ROOM_HEIGHT_MAP_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update specific tiles in the room heightmap

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of tile updates. |
| `updates` | `object[]` | required | Array of tile update records. Each contains: `x` (int32), `y` (int32), `tileHeight` (int16).<br/> |

## Behavior

### Sender
Sent when furniture placement changes tile heights, to update the client's heightmap without resending the full map.


### Receiver
The client updates the affected tile heights in the existing heightmap. Confirmed in GLADIATOR.

## Notes

- No additional notes

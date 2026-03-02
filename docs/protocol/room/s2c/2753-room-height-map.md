---
title: room.height_map
sidebar_position: 45
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2753`
- **Header**: `ROOM_HEIGHT_MAP`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full room tile heightmap

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `width` | `int32` | required | Number of tiles in the X dimension. |
| `height` | `int32` | required | Number of tiles in the Y dimension. |
| `tiles` | `int16[]` | required | Array of tile stack heights (width × height entries). Each value encodes the tile height; -1 indicates an impassable tile.<br/> |

## Behavior

### Sender
Sent during room loading to provide the complete tile-by-tile height information for the room model.


### Receiver
The client uses the heightmap to render floor tiles at correct heights. Confirmed in GLADIATOR.

## Notes

- No additional notes

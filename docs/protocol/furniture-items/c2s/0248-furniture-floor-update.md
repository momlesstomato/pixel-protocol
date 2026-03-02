---
title: furniture.floor_update
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `248`
- **Header**: `FURNITURE_FLOOR_UPDATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Move or rotate a floor item in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |
| `x` | `int32` | required | New tile X coordinate. |
| `y` | `int32` | required | New tile Y coordinate. |
| `direction` | `int32` | required | New rotation direction. |

## Behavior

### Sender
Sent when the user drags a floor item to a new position or rotates it using the furniture edit mode.


### Receiver
The server validates placement and broadcasts `furniture.floor_item_updated` (s2c 3776). Confirmed in GLADIATOR.

## Notes

- No additional notes

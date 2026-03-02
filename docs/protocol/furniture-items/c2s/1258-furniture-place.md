---
title: furniture.place
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1258`
- **Header**: `FURNITURE_PLACE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Place a furniture item from inventory into the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item ID to place. |
| `x` | `int32` | required | Target tile X coordinate (floor items). |
| `y` | `int32` | required | Target tile Y coordinate (floor items). |
| `direction` | `int32` | required | Rotation direction (0, 2, 4, 6 for floor items). |

## Behavior

### Sender
Sent when the user drops a floor or wall item from inventory into the room. The type field differentiates floor from wall items.


### Receiver
The server places the item and broadcasts `furniture.floor_item_added` (s2c 1534) or `furniture.wall_item_added` (s2c 2187). Confirmed in GLADIATOR.

## Notes

- No additional notes

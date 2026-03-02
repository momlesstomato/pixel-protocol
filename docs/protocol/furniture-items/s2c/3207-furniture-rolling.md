---
title: furniture.rolling
sidebar_position: 50
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3207`
- **Header**: `ROOM_ROLLING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Animate items or units rolling across the floor

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rollerItemId` | `int32` | required | Room item ID of the roller furniture. |
| `rollerX` | `int32` | required | X coordinate of the roller. |
| `rollerY` | `int32` | required | Y coordinate of the roller. |
| `rollerZ` | `string` | required | Z height of the roller. |
| `movedUnitCount` | `int32` | required | Number of units being rolled. |
| `units` | `object[]` | required | Array of rolled unit records. Each contains: `roomIndex` (int32), `fromZ` (string), `toZ` (string).<br/> |
| `movedItemCount` | `int32` | required | Number of floor items being rolled. |
| `items` | `object[]` | required | Array of rolled item records. Each contains: `itemId` (int32), `fromZ` (string), `toZ` (string).<br/> |
| `targetX` | `int32` | required | Target X coordinate after rolling. |
| `targetY` | `int32` | required | Target Y coordinate after rolling. |

## Behavior

### Sender
Sent when a roller furniture item moves an avatar, pet, or floor item to an adjacent tile.


### Receiver
The client animates the roll transition for affected units and items. Confirmed in GLADIATOR.

## Notes

- No additional notes

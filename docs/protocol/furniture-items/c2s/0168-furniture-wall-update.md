---
title: furniture.wall_update
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `168`
- **Header**: `FURNITURE_WALL_UPDATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Move a wall item to a new position

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `string` | required | Room wall item ID (serialized as string). |
| `wallPosition` | `string` | required | Wall position string in Nitro wall-item notation. |

## Behavior

### Sender
Sent when the user repositions a wall item using the furniture edit mode.


### Receiver
The server validates placement and broadcasts `furniture.wall_item_updated` (s2c 2009). Confirmed in GLADIATOR.

## Notes

- No additional notes

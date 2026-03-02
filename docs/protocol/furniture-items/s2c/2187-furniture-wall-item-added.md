---
title: furniture.wall_item_added
sidebar_position: 40
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2187`
- **Header**: `ITEM_WALL_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a wall item was placed in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ownerId` | `int32` | required | ID of the user who placed the item. |
| `ownerName` | `string` | required | Name of the owner. |
| `item` | `object` | required | Wall item record (same structure as `furniture.wall_items`). |

## Behavior

### Sender
Sent when a wall furniture item is placed in the room.


### Receiver
The client adds the wall item to the room scene. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.floor_item_added
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1534`
- **Header**: `FURNITURE_FLOOR_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a floor item was placed in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ownerId` | `int32` | required | ID of the user who placed the item. |
| `ownerName` | `string` | required | Name of the owner. |
| `item` | `object` | required | Floor item record (same structure as `furniture.floor_items`). |

## Behavior

### Sender
Sent to all room occupants when a floor furniture item is placed.


### Receiver
The client adds the item to the room scene. Confirmed in GLADIATOR.

## Notes

- No additional notes

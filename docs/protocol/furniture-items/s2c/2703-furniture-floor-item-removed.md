---
title: furniture.floor_item_removed
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2703`
- **Header**: `FURNITURE_FLOOR_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a floor item was removed from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |
| `isExpired` | `boolean` | required | True if the item was removed due to expiry. |
| `delay` | `int32` | required | Removal animation delay in milliseconds. |
| `userId` | `int32` | required | ID of the user who removed the item. |

## Behavior

### Sender
Sent when a floor furniture item is picked up or deleted.


### Receiver
The client removes the item from the room scene. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.wall_item_removed
sidebar_position: 51
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3208`
- **Header**: `ITEM_WALL_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a wall item was removed from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room wall item ID. |
| `userId` | `int32` | required | ID of the user who removed the item. |

## Behavior

### Sender
Sent when a wall furniture item is picked up or deleted.


### Receiver
The client removes the wall item from the scene. Confirmed in GLADIATOR.

## Notes

- No additional notes

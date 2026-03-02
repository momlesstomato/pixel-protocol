---
title: furniture.pickup
sidebar_position: 56
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3456`
- **Header**: `FURNITURE_PICKUP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Pick up a furniture item from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Item type: 1=floor item, 2=wall item. |
| `itemId` | `int32` | required | Room item ID to pick up. |

## Behavior

### Sender
Sent when the room owner or rights holder picks up a floor or wall item from the room into inventory.


### Receiver
The server removes the item from the room and returns it to inventory. Confirmed in GLADIATOR.

## Notes

- No additional notes

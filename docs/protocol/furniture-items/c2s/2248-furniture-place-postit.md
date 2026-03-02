---
title: furniture.place_postit
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2248`
- **Header**: `FURNITURE_POSTIT_PLACE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Place a post-it note on the room wall

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item ID of the post-it. |
| `wallPosition` | `string` | required | Wall position string for placement. |

## Behavior

### Sender
Sent when the user places a new post-it note from inventory onto a room wall.


### Receiver
The server places the post-it and sends `furniture.postit_open` (s2c 2366). Confirmed in GLADIATOR.

## Notes

- No additional notes

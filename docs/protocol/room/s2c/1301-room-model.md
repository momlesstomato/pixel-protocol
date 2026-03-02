---
title: room.model
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1301`
- **Header**: `ROOM_MODEL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room layout model data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `modelName` | `string` | required | Identifier of the room model template. |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent in response to `room.get_model` (c2s 2300). Contains the room's tile map string for rendering the layout.


### Receiver
The client renders the room floor plan using the tile map. Confirmed in GLADIATOR.

## Notes

- No additional notes

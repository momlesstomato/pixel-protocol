---
title: navigator.create_room
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2752`
- **Header**: `ROOM_CREATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Create a new room with the specified configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomName` | `string` | required | Display name for the new room (3–25 characters). |
| `roomDescription` | `string` | required | Optional description shown in room listings (0–128 characters).<br/> |
| `modelName` | `string` | required | Internal identifier of the room layout template to use.<br/> |
| `categoryId` | `int32` | required | ID of the navigator category under which the room is listed. Must match a category the user is permitted to use.<br/> |
| `maxVisitors` | `int32` | required | Maximum number of simultaneous visitors (1–250). |
| `tradeType` | `int32` | required | Trading permission mode: 0 = trading allowed, 1 = trading with rights only, 2 = trading disabled.<br/> |

## Behavior

### Sender
Sent when the user submits the room-creation form. The server validates all fields before creating the room.


### Receiver
The server validates the name (3–25 characters, passes word filter), description (≤128 characters), model name, category, visitor cap (≤250), and trade type (0–2). If the user is already at their room limit, the server responds with `navigator.can_create_room` (s2c 378) reporting the limit reached. On success, the server creates the room and responds with `navigator.room_created` (s2c 1304). Confirmed in GLADIATOR.

## Notes

- No additional notes

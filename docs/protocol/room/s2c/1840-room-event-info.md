---
title: room.event_info
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1840`
- **Header**: `ROOM_EVENT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver room event or advertisement information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flatId` | `int32` | required | ID of the room hosting the event. |
| `name` | `string` | required | Event display name. |
| `description` | `string` | required | Event description text. |
| `categoryId` | `int32` | required | Event category identifier. |
| `minutesLeft` | `int32` | required | Minutes until the event expires. |
| `tags` | `string[]` | required | Event tags. |

## Behavior

### Sender
Sent when a room event is active and needs to be displayed to room occupants in the room info panel.


### Receiver
The client shows the event badge and details in the header. Confirmed in GLADIATOR.

## Notes

- No additional notes

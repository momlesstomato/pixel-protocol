---
title: room.model_name
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2031`
- **Header**: `ROOM_MODEL_NAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room model identifier

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `modelName` | `string` | required | Room model template name. |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent immediately before `room.model` (s2c 1301) to identify the room model template name.


### Receiver
The client uses the model name to select the appropriate tile-map template. Confirmed in GLADIATOR.

## Notes

- No additional notes

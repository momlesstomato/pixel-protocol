---
title: room.can_create_room_event
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2599`
- **Header**: `CAN_CREATE_ROOM_EVENT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Can create room event

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about can create room event.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

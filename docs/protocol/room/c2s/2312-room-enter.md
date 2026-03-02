---
title: room.enter
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2312`
- **Header**: `ROOM_ENTER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Enter a room by its flat ID

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flatId` | `int32` | required | Numeric identifier of the room to enter. |

## Behavior

### Sender
Sent when the user navigates into a room. Carries the numeric flat ID of the target room.


### Receiver
The server validates access rights and either begins the room-entry flow or returns `room.entry_error` (s2c 899). Confirmed in GLADIATOR.

## Notes

- No additional notes

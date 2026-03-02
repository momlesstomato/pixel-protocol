---
title: room.toggle_mute
sidebar_position: 52
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3637`
- **Header**: `ROOM_MUTE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle room-wide mute for all users

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent by a room rights holder to mute or unmute all users in the room simultaneously.


### Receiver
The server toggles room-wide mute and broadcasts `room.muted` (s2c 2533). Confirmed in GLADIATOR.

## Notes

- No additional notes

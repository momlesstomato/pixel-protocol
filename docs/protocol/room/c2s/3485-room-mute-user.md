---
title: room.mute_user
sidebar_position: 48
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3485`
- **Header**: `ROOM_MUTE_USER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mute a specific user in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to mute. |
| `roomId` | `int32` | required | ID of the room. |
| `minutes` | `int32` | required | Duration of the mute in minutes. |

## Behavior

### Sender
Sent by a room rights holder to mute a specific user for a number of minutes.


### Receiver
The server applies the mute and sends `room.user_muted` (s2c 826) to the target. Confirmed in GLADIATOR.

## Notes

- No additional notes

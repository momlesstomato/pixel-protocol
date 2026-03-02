---
title: room.ban_user
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1477`
- **Header**: `ROOM_BAN_GIVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Ban a user from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to ban. |
| `roomId` | `int32` | required | ID of the room. |
| `length` | `string` | required | Ban duration: `RWUAM_BAN_USER_DAY`, `RWUAM_BAN_USER_HOUR`, or `RWUAM_BAN_USER_PERM`. |

## Behavior

### Sender
Sent when a room rights holder bans a user. The duration determines whether the ban is temporary or permanent.


### Receiver
The server removes the user from the room and records the ban. Confirmed in GLADIATOR.

## Notes

- No additional notes

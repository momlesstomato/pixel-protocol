---
title: room.unban_user
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `992`
- **Header**: `ROOM_BAN_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a ban from a user in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to unban. |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent by the room owner to lift a previously imposed ban.


### Receiver
The server removes the ban record for the user in the room. Confirmed in GLADIATOR.

## Notes

- No additional notes

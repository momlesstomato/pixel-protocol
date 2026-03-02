---
title: room.give_rights
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `808`
- **Header**: `ROOM_RIGHTS_GIVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Grant room rights to a user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to receive rights. |

## Behavior

### Sender
Sent by the room owner to grant rights to a user currently in the room.


### Receiver
The server adds the user to the room's rights list and sends `room.rights_list_add` (s2c 2088). Confirmed in GLADIATOR.

## Notes

- No additional notes

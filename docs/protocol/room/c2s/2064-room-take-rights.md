---
title: room.take_rights
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2064`
- **Header**: `ROOM_RIGHTS_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove room rights from a specific user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose rights are revoked. |

## Behavior

### Sender
Sent by the room owner to revoke rights from a specific user.


### Receiver
The server removes the user from the rights list and sends `room.rights_list_remove` (s2c 1327). Confirmed in GLADIATOR.

## Notes

- No additional notes

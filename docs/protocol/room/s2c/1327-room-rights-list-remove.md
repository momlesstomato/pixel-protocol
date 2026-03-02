---
title: room.rights_list_remove
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1327`
- **Header**: `ROOM_RIGHTS_LIST_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a user was removed from the rights list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `userId` | `int32` | required | User ID of the former rights holder. |

## Behavior

### Sender
Sent to all room occupants when a user's room rights are revoked.


### Receiver
The client removes the user from the rights list and hides their rights indicator. Confirmed in GLADIATOR.

## Notes

- No additional notes

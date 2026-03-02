---
title: room.rights_list_add
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2088`
- **Header**: `ROOM_RIGHTS_LIST_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a user was added to the rights list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `userId` | `int32` | required | User ID of the new rights holder. |
| `username` | `string` | required | Username of the new rights holder. |

## Behavior

### Sender
Sent to all room occupants when a user is granted room rights.


### Receiver
The client updates the rights list and shows the rights indicator for the user. Confirmed in GLADIATOR.

## Notes

- No additional notes

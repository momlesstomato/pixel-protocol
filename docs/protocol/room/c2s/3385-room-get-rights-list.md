---
title: room.get_rights_list
sidebar_position: 47
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3385`
- **Header**: `ROOM_RIGHTS_LIST`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the list of users with room rights

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent by the room owner to retrieve the complete list of users who have been granted rights in the room.


### Receiver
The server responds with `room.rights_list` (s2c 1284). Confirmed in GLADIATOR.

## Notes

- No additional notes

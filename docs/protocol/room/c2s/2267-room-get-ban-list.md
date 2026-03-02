---
title: room.get_ban_list
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2267`
- **Header**: `ROOM_BAN_LIST`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the room ban list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `pageIndex` | `int32` | required | Page index for paginated ban lists (0-based). |

## Behavior

### Sender
Sent by the room owner to retrieve the list of users who are currently banned from the room.


### Receiver
The server responds with `room.ban_list` (s2c 1869). Confirmed in GLADIATOR.

## Notes

- No additional notes

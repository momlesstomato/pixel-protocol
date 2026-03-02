---
title: room.rights_list
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1284`
- **Header**: `ROOM_RIGHTS_LIST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full list of users with room rights

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `users` | `object[]` | required | Array of rights holder records. Each contains: `userId` (int32), `username` (string).<br/> |

## Behavior

### Sender
Sent in response to `room.get_rights_list` (c2s 3385). Contains all users who have been granted rights.


### Receiver
The client populates the rights management panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

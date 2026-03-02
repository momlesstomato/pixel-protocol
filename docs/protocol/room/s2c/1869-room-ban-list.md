---
title: room.ban_list
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1869`
- **Header**: `ROOM_BAN_LIST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of users banned from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `bannedUsers` | `object[]` | required | Array of banned user records. Each record contains: `userId` (int32), `username` (string).<br/> |

## Behavior

### Sender
Sent in response to `room.get_ban_list` (c2s 2267). Contains all currently banned users with their IDs and names.


### Receiver
The client displays the ban list in the room management panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

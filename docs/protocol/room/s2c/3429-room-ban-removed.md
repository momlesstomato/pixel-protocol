---
title: room.ban_removed
sidebar_position: 49
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3429`
- **Header**: `ROOM_BAN_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a ban has been removed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `userId` | `int32` | required | ID of the unbanned user. |

## Behavior

### Sender
Sent when the room owner unbans a user, confirming the removal in the ban list UI.


### Receiver
The client removes the user from the displayed ban list. Confirmed in GLADIATOR.

## Notes

- No additional notes

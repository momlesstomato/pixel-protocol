---
title: room.kick_user
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1320`
- **Header**: `ROOM_KICK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Kick a user from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to kick. |

## Behavior

### Sender
Sent by a room rights holder to forcibly remove a user from the room.


### Receiver
The server disconnects the target user from the room. Confirmed in GLADIATOR.

## Notes

- No additional notes

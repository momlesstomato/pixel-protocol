---
title: room.remove_all_rights
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2683`
- **Header**: `ROOM_RIGHTS_REMOVE_ALL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove rights from all users in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent by the room owner to strip rights from every user simultaneously.


### Receiver
The server clears the full rights list and broadcasts the change. Confirmed in GLADIATOR.

## Notes

- No additional notes

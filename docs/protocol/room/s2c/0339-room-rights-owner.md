---
title: room.rights_owner
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `339`
- **Header**: `ROOM_RIGHTS_OWNER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the user that they have room owner rights

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent during room entry to grant the room owner full control rights. Distinct from the normal rights packet.


### Receiver
The client enables all room owner controls. Confirmed in GLADIATOR.

## Notes

- No additional notes

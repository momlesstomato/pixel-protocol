---
title: room.rights
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `780`
- **Header**: `ROOM_RIGHTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the user's rights level in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rightsLevel` | `int32` | required | Rights level: 0=none, 1=rights holder, 2=controller, 3=room_owner. |

## Behavior

### Sender
Sent during room entry to inform the client of the user's access level in the current room.


### Receiver
The client enables or disables room management UI elements based on the rights level. Confirmed in GLADIATOR.

## Notes

- No additional notes

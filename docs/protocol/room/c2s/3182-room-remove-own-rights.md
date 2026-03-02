---
title: room.remove_own_rights
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3182`
- **Header**: `ROOM_RIGHTS_REMOVE_OWN`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Relinquish the user's own room rights

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |

## Behavior

### Sender
Sent when a user voluntarily gives up their rights in a room.


### Receiver
The server removes the user from the room's rights list. Confirmed in GLADIATOR.

## Notes

- No additional notes

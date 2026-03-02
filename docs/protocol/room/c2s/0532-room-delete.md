---
title: room.delete
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `532`
- **Header**: `ROOM_DELETE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Delete the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room to delete. |

## Behavior

### Sender
Sent by the room owner to permanently delete the room.


### Receiver
The server deletes the room record and removes all users. Confirmed in GLADIATOR.

## Notes

- No additional notes

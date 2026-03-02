---
title: room.owner_info
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `749`
- **Header**: `ROOM_INFO_OWNER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Provide the room owner's display information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ownerId` | `int32` | required | User ID of the room owner. |
| `ownerName` | `string` | required | Display name of the room owner. |

## Behavior

### Sender
Sent during room loading to identify the room owner. Displayed in the room info panel.


### Receiver
The client shows the owner name in the room header. Confirmed in GLADIATOR.

## Notes

- No additional notes

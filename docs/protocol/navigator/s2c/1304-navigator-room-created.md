---
title: navigator.room_created
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1304`
- **Header**: `ROOM_CREATED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm successful room creation and provide the new room's identity

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | Server-assigned ID of the newly created room. |
| `roomName` | `string` | required | Display name of the newly created room. |

## Behavior

### Sender
Sent in response to `navigator.create_room` (c2s 2752) when the room is created successfully. Contains the new room's ID and name.


### Receiver
The client uses the room ID to navigate the user into the newly created room and updates the navigator room list. Confirmed in GLADIATOR.

## Notes

- No additional notes

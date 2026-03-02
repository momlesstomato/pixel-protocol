---
title: room.move_pet
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3449`
- **Header**: `PET_MOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Move a pet to a new tile in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |
| `x` | `int32` | required | Target tile X coordinate. |
| `y` | `int32` | required | Target tile Y coordinate. |

## Behavior

### Sender
Sent by the room owner to command a pet to walk to a new tile.


### Receiver
The server pathfinds the pet to the requested tile. Confirmed in GLADIATOR.

## Notes

- No additional notes

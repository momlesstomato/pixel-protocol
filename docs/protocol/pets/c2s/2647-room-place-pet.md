---
title: room.place_pet
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2647`
- **Header**: `PET_PLACE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Place a pet from inventory into the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Inventory ID of the pet to place. |
| `x` | `int32` | required | Target tile X coordinate. |
| `y` | `int32` | required | Target tile Y coordinate. |

## Behavior

### Sender
Sent by the room owner to deploy a pet from their inventory into the room at a specific tile.


### Receiver
The server spawns the pet in the room. Confirmed in GLADIATOR.

## Notes

- No additional notes

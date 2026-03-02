---
title: room.pickup_pet
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1581`
- **Header**: `PET_PICKUP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a pet from the room into inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet to remove. |

## Behavior

### Sender
Sent by the room owner to return a pet from the room to inventory.


### Receiver
The server removes the pet from the room and sends `room.pet_removed` (s2c). Confirmed in GLADIATOR.

## Notes

- No additional notes

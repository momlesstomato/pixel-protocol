---
title: user.pet_respected
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2788`
- **Header**: `PET_RESPECTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a pet has received a respect point

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `respect` | `int32` | required | Updated total respect points received by the pet |
| `petOwnerId` | `int32` | required | User ID of the pet's owner |

## Behavior

### Sender
Sent to the room when a user gives a respect point to a pet. Includes the total respect count and the pet's data so all clients can update their display.


### Receiver
The client plays the pet-respect animation and updates the pet's respect counter in any open pet info panels.

## Notes

- After `petOwnerId`, a PetData sub-structure is written: `int32` petId, `string` petName, then PetFigureData (`int32` typeId, `int32` paletteId, `string` color, `int32` breedId, custom part count and parts), `int32` level.


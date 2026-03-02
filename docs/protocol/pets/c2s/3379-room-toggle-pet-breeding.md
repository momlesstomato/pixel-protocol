---
title: room.toggle_pet_breeding
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3379`
- **Header**: `TOGGLE_PET_BREEDING`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle pet breeding mode

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |
| `enabled` | `boolean` | required | True to enable breeding mode, false to disable. |

## Behavior

### Sender
Sent to enable or disable a pet's breeding mode, allowing it to be paired with another compatible pet.


### Receiver
The server updates the pet's breeding availability. Confirmed in GLADIATOR.

## Notes

- No additional notes

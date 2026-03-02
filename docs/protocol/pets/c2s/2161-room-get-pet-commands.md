---
title: room.get_pet_commands
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2161`
- **Header**: `GET_PET_TRAINING_PANEL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the pet training command panel

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |

## Behavior

### Sender
Sent when the user opens the training panel for a pet. Returns the list of available training commands.


### Receiver
The server responds with `room.pet_training_panel` (s2c 1164). Confirmed in GLADIATOR.

## Notes

- No additional notes

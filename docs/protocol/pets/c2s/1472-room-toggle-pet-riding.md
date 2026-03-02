---
title: room.toggle_pet_riding
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1472`
- **Header**: `TOGGLE_PET_RIDING`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle pet riding permission

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |
| `enabled` | `boolean` | required | True to allow riding, false to disallow. |

## Behavior

### Sender
Sent to allow or disallow other users to ride the pet.


### Receiver
The server updates the pet's riding permission flag. Confirmed in GLADIATOR.

## Notes

- No additional notes

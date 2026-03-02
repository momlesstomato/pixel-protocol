---
title: room.mount_pet
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1036`
- **Header**: `PET_RIDE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mount or unmount a rideable pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |
| `mount` | `boolean` | required | True to mount, false to dismount. |

## Behavior

### Sender
Sent when the user mounts or dismounts a rideable pet. The pet must have a saddle equipped.


### Receiver
The server updates the pet's riding state. Confirmed in GLADIATOR.

## Notes

- No additional notes

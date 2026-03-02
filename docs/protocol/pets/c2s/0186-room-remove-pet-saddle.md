---
title: room.remove_pet_saddle
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `186`
- **Header**: `REMOVE_PET_SADDLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a saddle from a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |

## Behavior

### Sender
Sent when the user removes a saddle from a pet in the room, returning it to inventory.


### Receiver
The server removes the saddle from the pet and adds it to inventory. Confirmed in GLADIATOR.

## Notes

- No additional notes

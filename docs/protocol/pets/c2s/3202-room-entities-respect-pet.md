---
title: room_entities.respect_pet
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3202`
- **Header**: `PET_RESPECT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show affection to a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet to respect. |

## Behavior

### Sender
Sent when the user respects or shows affection to a pet entity in the room. Contributes to the pet's happiness.


### Receiver
The server grants happiness to the pet. Confirmed in GLADIATOR.

## Notes

- No additional notes

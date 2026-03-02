---
title: pet.breeding
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1746`
- **Header**: `PET_BREEDING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify about a pet breeding state change

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `state` | `int32` | required | Breeding state: 1=cancelled, 2=accepted, 3=requested. |
| `ownPetId` | `int32` | required | Player's own pet identifier in the breeding. |
| `otherPetId` | `int32` | required | Other pet identifier in the breeding. |

## Behavior

### Sender
Sent when two pets interact at a breeding nest.


### Receiver
The client updates the breeding UI based on the state.

## Notes

- No additional notes

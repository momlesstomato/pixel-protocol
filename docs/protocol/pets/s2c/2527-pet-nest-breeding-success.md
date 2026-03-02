---
title: pet.nest_breeding_success
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2527`
- **Header**: `PET_NEST_BREEDING_SUCCESS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that breeding nest assignment succeeded

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet that was placed in the nest. |
| `rarityCategory` | `int32` | required | Rarity category of the resulting offspring. |

## Behavior

### Sender
Sent when a pet successfully reaches the breeding nest.


### Receiver
The client updates the breeding nest visual state.

## Notes

- No additional notes

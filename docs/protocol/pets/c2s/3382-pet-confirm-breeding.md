---
title: pet.confirm_breeding
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3382`
- **Header**: `PET_CONFIRM_BREEDING`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm a pet breeding request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `nestItemId` | `int32` | required | Breeding nest furniture item identifier. |

## Behavior

### Sender
Sent when the player accepts the breeding dialog after reviewing the potential offspring.


### Receiver
The server initiates the breeding process between the two pets in the breeding nest and responds with the breeding result. Confirmed in GLADIATOR.

## Notes

- No additional notes

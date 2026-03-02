---
title: pet.compost
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3835`
- **Header**: `COMPOST_PLANT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Compost a plant pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier of the plant to compost. |

## Behavior

### Sender
Sent when the player uses the compost action on a plant-type pet.


### Receiver
The server removes the plant pet and may grant a reward item. Confirmed in GLADIATOR.

## Notes

- No additional notes

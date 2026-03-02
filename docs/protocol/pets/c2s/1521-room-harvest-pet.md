---
title: room.harvest_pet
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1521`
- **Header**: `HARVEST_PET`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Harvest from a pet-grown plant

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet to harvest from. |

## Behavior

### Sender
Sent when the user harvests produce from a pet's plant.


### Receiver
The server processes the harvest and grants the yield items. Confirmed in GLADIATOR.

## Notes

- No additional notes

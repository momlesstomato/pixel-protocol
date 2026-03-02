---
title: pet.figure_update
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1924`
- **Header**: `PET_FIGURE_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update a pet's visual figure in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the pet. |
| `petId` | `int32` | required | Pet identifier. |
| `figureData` | `object` | required | Pet figure data containing typeId, paletteId, color, breedId, and customParts. |
| `hasSaddle` | `boolean` | required | Whether a saddle is shown. |
| `isRiding` | `boolean` | required | Whether someone is riding the pet. |

## Behavior

### Sender
Sent when a pet's appearance changes (saddle added/removed, riding state change).


### Receiver
The client updates the pet sprite in the room.

## Notes

- No additional notes

---
title: catalog.pet_breeds
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3331`
- **Header**: `CATALOG_RECEIVE_PET_BREEDS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver available pet breed palette data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petType` | `string` | required | Pet type name. |
| `paletteCount` | `int32` | required | Number of palette records. |
| `palettes` | `object[]` | required | Array of palette records. Each contains: `paletteId` (int32), `colorId` (int32), `breedId` (int32), `sellable` (boolean), `rare` (boolean).<br/> |

## Behavior

### Sender
Sent in response to `catalog.get_pet_breeds` (c2s 1756) with breed and color options for the requested pet type.


### Receiver
The client renders the pet color/breed selector. Confirmed in GLADIATOR.

## Notes

- No additional notes

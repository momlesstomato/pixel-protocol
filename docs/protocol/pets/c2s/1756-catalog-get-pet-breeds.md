---
title: catalog.get_pet_breeds
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1756`
- **Header**: `CATALOG_REQUESET_PET_BREEDS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request available pet breed palettes for a pet type

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petTypeId` | `string` | required | Pet type name (e.g. `cat`, `dog`, `rabbit`). |

## Behavior

### Sender
Sent when the user opens a pet purchase page to see available breed and color options.


### Receiver
The server responds with `catalog.pet_breeds` (s2c 3331). Confirmed in GLADIATOR.

## Notes

- No additional notes

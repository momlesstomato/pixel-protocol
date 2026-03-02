---
title: room.use_pet_product
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1328`
- **Header**: `USE_PET_PRODUCT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Use a product item on a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |
| `itemId` | `int32` | required | Inventory item ID of the product to use. |

## Behavior

### Sender
Sent when the user applies a product (e.g. accessory, potion) to a pet in the room.


### Receiver
The server applies the product effect to the pet. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: pet.confirm_breeding_request
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `634`
- **Header**: `PET_CONFIRM_BREEDING_REQUEST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show the breeding confirmation dialog

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `nestId` | `int32` | required | Breeding nest furniture identifier. |
| `pet1` | `object` | required | First pet info: webId (int32), name (string), level (int32), figure (string), and owner (string). |
| `pet2` | `object` | required | Second pet info with the same structure. |
| `rarityCategories` | `list&lt;object&gt;` | required | Rarity pool entries with chance (int32) and breedIds (list&lt;int32&gt;). |
| `resultPetType` | `int32` | required | Type identifier for the offspring. |

## Behavior

### Sender
Sent when two pets are eligible to breed and the player needs to confirm.


### Receiver
The client shows a dialog with both pets, potential offspring rarity, and result type.

## Notes

- No additional notes

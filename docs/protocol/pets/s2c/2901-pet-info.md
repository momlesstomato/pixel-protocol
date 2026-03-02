---
title: pet.info
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2901`
- **Header**: `PET_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver detailed information about a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int32` | required | Pet identifier. |
| `name` | `string` | required | Pet display name. |
| `level` | `int32` | required | Current level. |
| `maximumLevel` | `int32` | required | Maximum achievable level. |
| `experience` | `int32` | required | Current experience points. |
| `levelExperienceGoal` | `int32` | required | Experience required for next level. |
| `energy` | `int32` | required | Current energy. |
| `maximumEnergy` | `int32` | required | Maximum energy. |
| `happiness` | `int32` | required | Current happiness. |
| `maximumHappiness` | `int32` | required | Maximum happiness. |
| `respect` | `int32` | required | Respect points received. |
| `ownerId` | `int32` | required | Owner user identifier. |
| `age` | `int32` | required | Age in days. |
| `ownerName` | `string` | required | Owner display name. |
| `rarityLevel` | `int32` | required | Rarity category. |
| `hasSaddle` | `boolean` | required | Whether a saddle is equipped. |
| `isRiding` | `boolean` | required | Whether someone is currently riding. |
| `skillThresholds` | `list&lt;int32&gt;` | required | Sorted command skill threshold values. |
| `publiclyRideable` | `int32` | required | Whether anyone can ride (non-zero = yes). |
| `breedable` | `boolean` | required | Whether the pet can breed. |
| `fullyGrown` | `boolean` | required | Whether the pet has reached maturity. |
| `dead` | `boolean` | required | Whether the pet is dead (plants). |
| `unknownRarity` | `int32` | required | Unknown rarity-related field. |
| `maximumTimeToLive` | `int32` | required | Maximum lifetime in seconds. |
| `remainingTimeToLive` | `int32` | required | Remaining lifetime in seconds. |
| `remainingGrowTime` | `int32` | required | Remaining grow time in seconds. |
| `publiclyBreedable` | `boolean` | required | Whether anyone can breed this pet. |

## Behavior

### Sender
Sent in response to a pet info request.


### Receiver
The client displays the pet information panel with stats, level, and owner details.

## Notes

- No additional notes

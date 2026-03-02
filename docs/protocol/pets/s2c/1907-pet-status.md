---
title: pet.status
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1907`
- **Header**: `PET_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update a pet's breeding and harvest status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index. |
| `petId` | `int32` | required | Pet identifier. |
| `canBreed` | `boolean` | required | Whether the pet can breed. |
| `canHarvest` | `boolean` | required | Whether the pet can be harvested (plants). |
| `canRevive` | `boolean` | required | Whether the pet can be revived. |
| `hasBreedingPermission` | `boolean` | required | Whether the player has permission to breed. |

## Behavior

### Sender
Sent when a pet's status flags change.


### Receiver
The client updates context menu options for the pet.

## Notes

- No additional notes

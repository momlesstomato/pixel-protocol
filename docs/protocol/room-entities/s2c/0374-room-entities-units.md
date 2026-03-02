---
title: room_entities.units
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `374`
- **Header**: `UNIT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a batch of room units (avatars, pets, bots)

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `unitCount` | `int32` | required | Number of units in the batch. |
| `units` | `object[]` | required | Array of unit records. Each begins with: `userId` (int32), `name` (string), `custom` (string), `figure` (string), `roomIndex` (int32), `x` (int32), `y` (int32), `z` (string), `direction` (int32), `type` (int32). Type 1 (avatar) adds: `sex` (string), `groupId` (int32), `groupStatus` (int32), `groupName` (string), `swimFigure` (string), `activityPoints` (int32), `isModerator` (boolean). Type 2 (pet) adds: `petType` (int32), `ownerId` (int32), `ownerName` (string), `rarityLevel` (int32), `hasSaddle` (boolean), `isRiding` (boolean), `canBreed` (boolean), `canHarvest` (boolean), `canRevive` (boolean), `hasBreedingPermission` (boolean), `petLevel` (int32), `petPosture` (string). Type 3 (bot): uses figure string as-is. Type 4 (rentable bot) adds: `sex` (string), `ownerId` (int32), `ownerName` (string), `skillCount` (int32), `skills` (int16[]).<br/> |

## Behavior

### Sender
Sent during room loading and when new units join the room. Contains all unit types differentiated by a type field.


### Receiver
The client renders each unit based on its type. Confirmed in GLADIATOR.

## Notes

- No additional notes

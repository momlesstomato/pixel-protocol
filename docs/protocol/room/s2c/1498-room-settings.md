---
title: room.settings
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1498`
- **Header**: `ROOM_SETTINGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full room settings record

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `roomName` | `string` | required | Current room name. |
| `roomDescription` | `string` | required | Current room description. |
| `doorMode` | `int32` | required | Current door mode: 0=open, 1=doorbell, 2=password, 3=invisible. |
| `userLimit` | `int32` | required | Current maximum user count. |
| `categoryId` | `int32` | required | Current navigator category. |
| `tags` | `string[]` | required | Current room tags. |
| `tradeMode` | `int32` | required | Current trade mode. |
| `allowPets` | `boolean` | required | Whether visitors may bring pets. |
| `allowPetsEat` | `boolean` | required | Whether pets may eat room items. |
| `allowWalkthrough` | `boolean` | required | Whether avatars can walk through each other. |
| `hideWalls` | `boolean` | required | Whether walls are hidden. |
| `wallThickness` | `int32` | required | Wall thickness level. |
| `floorThickness` | `int32` | required | Floor thickness level. |
| `muteState` | `int32` | required | Who can mute users. |
| `kickState` | `int32` | required | Who can kick users. |
| `banState` | `int32` | required | Who can ban users. |
| `chatSettings` | `object` | required | Chat configuration (mode, weight, speed, distance, flood protection). |

## Behavior

### Sender
Sent in response to `room.get_settings` (c2s 3129). Contains all editable room configuration fields.


### Receiver
The client populates the settings editor form with the received values. Confirmed in GLADIATOR.

## Notes

- No additional notes

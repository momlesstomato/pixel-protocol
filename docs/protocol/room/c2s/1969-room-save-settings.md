---
title: room.save_settings
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1969`
- **Header**: `ROOM_SETTINGS_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save updated room settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `roomName` | `string` | required | Room name. |
| `roomDescription` | `string` | required | Room description. |
| `lockState` | `int32` | required | Door mode: 0=open, 1=doorbell, 2=password, 3=invisible. |
| `password` | `string` | required | Password for password-locked rooms (empty string otherwise). |
| `userCount` | `int32` | required | Maximum number of concurrent users allowed. |
| `categoryId` | `int32` | required | Navigator category identifier. |
| `tagsCount` | `int32` | required | Number of tags that follow. |
| `tags` | `string[]` | required | Room tag strings (count given by `tagsCount`). |
| `tradeState` | `int32` | required | Trade mode: 0=disabled, 1=rights holders, 2=everyone. |
| `allowPets` | `boolean` | required | Whether visitors may bring pets into the room. |
| `allowPetsEat` | `boolean` | required | Whether pets may eat room foods. |
| `allowWalkthrough` | `boolean` | required | Whether avatars can walk through each other. |
| `hideWalls` | `boolean` | required | Whether room walls are hidden. |
| `wallThickness` | `int32` | required | Wall thickness level: -2 to 1. |
| `floorThickness` | `int32` | required | Floor thickness level: -2 to 1. |
| `muteState` | `int32` | required | Who can mute: 0=owner, 1=rights holders, 2=all. |
| `kickState` | `int32` | required | Who can kick: 0=owner, 1=rights holders, 2=all. |
| `banState` | `int32` | required | Who can ban: 0=owner, 1=rights holders, 2=all. |
| `chatBubbleMode` | `int32` | required | Chat bubble visual mode identifier. |
| `chatBubbleWeight` | `int32` | required | Chat bubble weight (text width) setting. |
| `chatBubbleSpeed` | `int32` | required | Chat bubble display speed. |
| `chatDistance` | `int32` | required | Maximum visible chat distance in tiles. |
| `chatFloodProtection` | `int32` | required | Flood protection level: 0=loose, 1=normal, 2=strict. |

## Behavior

### Sender
Sent when the room owner submits the settings form. Contains all configurable room parameters.


### Receiver
The server validates and persists the settings, then sends `room.settings_saved` (s2c 948) on success or `room.settings_save_error` (s2c 1555) on failure. Confirmed in GLADIATOR.

## Notes

- No additional notes

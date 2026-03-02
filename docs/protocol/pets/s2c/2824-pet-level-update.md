---
title: pet.level_update
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2824`
- **Header**: `PET_LEVEL_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a pet leveled up in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the pet. |
| `petId` | `int32` | required | Pet identifier. |
| `level` | `int32` | required | New level reached. |

## Behavior

### Sender
Sent when a pet gains enough experience to advance to the next level.


### Receiver
The client shows a level-up animation on the pet entity.

## Notes

- No additional notes

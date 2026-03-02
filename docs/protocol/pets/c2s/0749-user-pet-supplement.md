---
title: user.pet_supplement
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `749`
- **Header**: `PET_SUPPLEMENT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Give a supplement item to a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | ID of the pet receiving the supplement |
| `supplement` | `int32` | required | Supplement type identifier |

## Behavior

### Sender
Sent when the user gives a supplement (food, treat, etc.) to a pet in the room. The supplement type determines the in-game effect on the pet's stats.


### Receiver
The server applies the supplement effect to the pet and broadcasts `user.pet_supplemented` (s2c 3441) to the room.

## Notes

- No additional notes

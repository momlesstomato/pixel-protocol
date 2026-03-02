---
title: room_entities.effect
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1167`
- **Header**: `UNIT_EFFECT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit's avatar effect changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `effectId` | `int32` | required | Avatar effect identifier (0 = no effect). |
| `delayMs` | `int32` | required | Activation delay in milliseconds. |

## Behavior

### Sender
Sent when a unit activates or deactivates an avatar effect (e.g. wings, halo, particle effects).


### Receiver
The client applies the effect animation to the unit. Confirmed in GLADIATOR.

## Notes

- No additional notes

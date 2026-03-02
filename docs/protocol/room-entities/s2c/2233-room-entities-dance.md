---
title: room_entities.dance
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2233`
- **Header**: `UNIT_DANCE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit's dance animation changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `danceId` | `int32` | required | Dance animation ID (0 = stopped). |

## Behavior

### Sender
Sent to all room occupants when a unit starts or stops dancing.


### Receiver
The client updates the unit's animation state. Confirmed in GLADIATOR.

## Notes

- No additional notes

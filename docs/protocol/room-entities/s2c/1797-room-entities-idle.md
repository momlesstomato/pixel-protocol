---
title: room_entities.idle
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1797`
- **Header**: `UNIT_IDLE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit entered or left idle state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `idle` | `boolean` | required | True if the unit is now idle. |

## Behavior

### Sender
Sent when a unit goes idle after inactivity or returns to active state.


### Receiver
The client shows or hides the idle indicator above the unit. Confirmed in GLADIATOR.

## Notes

- No additional notes

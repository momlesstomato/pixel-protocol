---
title: room_entities.removed
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2661`
- **Header**: `UNIT_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit was removed from the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit that left. |

## Behavior

### Sender
Sent when a unit leaves the room (disconnect, kick, or voluntary exit).


### Receiver
The client removes the unit from the room scene. Confirmed in GLADIATOR.

## Notes

- No additional notes

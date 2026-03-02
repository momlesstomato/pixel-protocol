---
title: room_entities.hand_item
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1474`
- **Header**: `UNIT_HAND_ITEM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit is carrying a hand item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `itemId` | `int32` | required | Hand item identifier (0 = none). |

## Behavior

### Sender
Sent when a unit picks up, receives, or discards a hand-held item.


### Receiver
The client renders the hand item on the unit's avatar. Confirmed in GLADIATOR.

## Notes

- No additional notes

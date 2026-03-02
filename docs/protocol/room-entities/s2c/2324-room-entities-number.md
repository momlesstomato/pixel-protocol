---
title: room_entities.number
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2324`
- **Header**: `UNIT_NUMBER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Assign or confirm the user's room index

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | The assigned room entity index for the user's avatar. |

## Behavior

### Sender
Sent during room entry to assign the user's room entity index (used to reference them in subsequent packets).


### Receiver
The client stores the room index for the local avatar. Confirmed in GLADIATOR.

## Notes

- No additional notes

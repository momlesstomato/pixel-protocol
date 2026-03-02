---
title: room_entities.look_at
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3301`
- **Header**: `UNIT_LOOK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Make the avatar look toward a target

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `x` | `int32` | required | Target look-at X coordinate. |
| `y` | `int32` | required | Target look-at Y coordinate. |

## Behavior

### Sender
Sent when the user's avatar should face a specific tile position.


### Receiver
The server updates the avatar's head direction. Confirmed in GLADIATOR.

## Notes

- No additional notes

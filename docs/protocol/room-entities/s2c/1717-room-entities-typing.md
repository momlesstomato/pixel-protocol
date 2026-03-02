---
title: room_entities.typing
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1717`
- **Header**: `UNIT_TYPING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit's typing status changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `typing` | `int32` | required | 1 if typing, 0 if stopped. |

## Behavior

### Sender
Sent to nearby users when a unit starts or stops typing a chat message.


### Receiver
The client shows or hides the typing indicator above the unit. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: navigator.can_create_room
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `378`
- **Header**: `CAN_CREATE_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report whether the user is permitted to create a new room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resultCode` | `int32` | required | 0 = room creation is allowed; 1 = the user has reached their maximum room ownership limit.<br/> |
| `roomLimit` | `int32` | required | The maximum number of rooms the user is allowed to own (the threshold that determines the result code).<br/> |

## Behavior

### Sender
Sent in response to `navigator.can_create_room` (c2s 2128) and also sent instead of `navigator.room_created` when `navigator.create_room` (c2s 2752) fails because the user has reached their room limit.


### Receiver
When `resultCode` is 0 the client opens the room-creation form. When `resultCode` is 1 the client shows an error informing the user they have reached their room limit. Confirmed in GLADIATOR.

## Notes

- No additional notes

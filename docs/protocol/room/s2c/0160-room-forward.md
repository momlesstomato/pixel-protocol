---
title: room.forward
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `160`
- **Header**: `ROOM_FORWARD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Forward the client to a different room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the destination room. |

## Behavior

### Sender
Sent to redirect the client to another room, typically as part of a room-chain or teleport mechanism.


### Receiver
The client navigates to the specified room. Confirmed in GLADIATOR.

## Notes

- No additional notes

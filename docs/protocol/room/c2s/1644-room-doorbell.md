---
title: room.doorbell
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1644`
- **Header**: `ROOM_DOORBELL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Ring the doorbell of a locked room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Name of the room owner whose doorbell is being rung. |

## Behavior

### Sender
Sent when the user attempts to enter a room that requires doorbell access. Carries the target room owner's name.


### Receiver
The server notifies the room owner via `room.doorbell_ringing` (s2c 2309). The owner may accept or reject. Confirmed in GLADIATOR.

## Notes

- No additional notes

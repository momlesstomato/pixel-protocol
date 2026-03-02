---
title: room.muted
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2533`
- **Header**: `ROOM_MUTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that room-wide mute state has changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allMuted` | `boolean` | required | True if the room is now muted for all users. |

## Behavior

### Sender
Sent to all room occupants when the room-wide mute is toggled on or off by a rights holder.


### Receiver
The client updates the room mute indicator. Confirmed in GLADIATOR.

## Notes

- No additional notes

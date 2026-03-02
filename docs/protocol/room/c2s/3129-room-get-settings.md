---
title: room.get_settings
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3129`
- **Header**: `ROOM_SETTINGS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the full room settings record

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room whose settings are requested. |

## Behavior

### Sender
Sent by the room owner to retrieve the current room settings before displaying the settings editor.


### Receiver
The server responds with `room.settings` (s2c 1498). Confirmed in GLADIATOR.

## Notes

- No additional notes

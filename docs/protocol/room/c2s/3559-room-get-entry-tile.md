---
title: room.get_entry_tile
sidebar_position: 49
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3559`
- **Header**: `GET_ROOM_ENTRY_TILE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the room entry tile position

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent during room entry to determine where the avatar should spawn.


### Receiver
The server responds with `room.door_settings` (s2c 1664). Confirmed in GLADIATOR.

## Notes

- No additional notes

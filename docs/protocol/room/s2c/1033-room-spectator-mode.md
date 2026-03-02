---
title: room.spectator_mode
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1033`
- **Header**: `ROOM_SPECTATOR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate the user is in spectator mode

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to a user who enters a game room in spectator mode (when the room is full or the user is not a game participant).


### Receiver
The client switches to spectator mode UI, hiding interactive elements. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: room.get_occupied_tiles
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1687`
- **Header**: `GET_OCCUPIED_TILES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the set of occupied tiles in the room

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent during room editing to retrieve which tiles are occupied by furniture or entities.


### Receiver
The server responds with a list of occupied tile positions. Confirmed in GLADIATOR.

## Notes

- No additional notes

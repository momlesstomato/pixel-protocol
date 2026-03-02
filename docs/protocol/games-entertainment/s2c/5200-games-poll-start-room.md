---
title: games.poll_start_room
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `5200`
- **Header**: `POLL_START_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Poll start room

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about poll start room state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

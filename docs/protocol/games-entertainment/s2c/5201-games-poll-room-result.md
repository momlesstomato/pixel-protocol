---
title: games.poll_room_result
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `5201`
- **Header**: `POLL_ROOM_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Poll room result

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about poll room result state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

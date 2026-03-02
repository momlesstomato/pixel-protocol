---
title: moderation.modtool_room_chatlog
sidebar_position: 45
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3434`
- **Header**: `MODTOOL_ROOM_CHATLOG`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Modtool room chatlog

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about modtool room chatlog state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

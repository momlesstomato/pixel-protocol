---
title: moderation.modtool_room_info
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1333`
- **Header**: `MODTOOL_ROOM_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Modtool room info

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about modtool room info state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

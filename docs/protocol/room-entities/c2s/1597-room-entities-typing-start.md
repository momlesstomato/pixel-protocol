---
title: room_entities.typing_start
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1597`
- **Header**: `UNIT_TYPING`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate the user has started typing

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user begins composing a chat message, displaying a typing indicator above the avatar.


### Receiver
The server broadcasts `room_entities.typing` (s2c 1717). Confirmed in GLADIATOR.

## Notes

- No additional notes

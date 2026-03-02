---
title: room_entities.typing_stop
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1474`
- **Header**: `UNIT_TYPING_STOP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate the user has stopped typing

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user closes the chat input without sending, removing the typing indicator.


### Receiver
The server broadcasts the typing stopped state. Confirmed in GLADIATOR.

## Notes

- No additional notes

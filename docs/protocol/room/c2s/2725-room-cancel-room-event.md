---
title: room.cancel_room_event
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2725`
- **Header**: `CANCEL_ROOM_EVENT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cancel room event

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The client sends this message to cancel room event.


### Receiver
The server processes the cancel room event request and responds appropriately.

## Notes

- No additional notes

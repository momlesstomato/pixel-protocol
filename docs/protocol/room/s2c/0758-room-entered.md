---
title: room.entered
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `758`
- **Header**: `ROOM_ENTER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm successful room entry

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the server confirms the user has entered the room. Carries no payload; the client then requests the room model.


### Receiver
The client begins loading the room by sending `room.get_model` (c2s 2300). Confirmed in GLADIATOR.

## Notes

- No additional notes

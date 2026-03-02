---
title: room.get_model
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2300`
- **Header**: `ROOM_MODEL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the room layout model and entry data

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent immediately after receiving `room.entered` (s2c 758) to request the room's layout model name and door settings.


### Receiver
The server responds with `room.model_name` (s2c 2031) and then `room.model` (s2c 1301). Confirmed in GLADIATOR.

## Notes

- No additional notes

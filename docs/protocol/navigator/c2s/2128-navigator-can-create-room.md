---
title: navigator.can_create_room
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2128`
- **Header**: `CAN_CREATE_ROOM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Check whether the user is permitted to create a new room

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent before the room-creation UI is opened to determine if the user has reached their room ownership limit. Carries no payload.


### Receiver
The server compares the user's current room count against their allowed maximum and responds with `navigator.can_create_room` (s2c 378). Confirmed in GLADIATOR.

## Notes

- No additional notes

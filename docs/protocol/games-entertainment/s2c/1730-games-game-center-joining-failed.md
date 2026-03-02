---
title: games.game_center_joining_failed
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1730`
- **Header**: `GAME_CENTER_JOINING_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Game center joining failed

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about game center joining failed state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

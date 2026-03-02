---
title: games.game_center_stop_counter
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3191`
- **Header**: `GAME_CENTER_STOP_COUNTER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Game center stop counter

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about game center stop counter state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

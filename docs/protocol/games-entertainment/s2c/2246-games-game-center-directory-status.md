---
title: games.game_center_directory_status
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2246`
- **Header**: `GAME_CENTER_DIRECTORY_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Game center directory status

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about game center directory status state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

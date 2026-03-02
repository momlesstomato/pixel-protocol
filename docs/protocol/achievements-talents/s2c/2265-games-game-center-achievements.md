---
title: games.game_center_achievements
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2265`
- **Header**: `GAME_CENTER_ACHIEVEMENTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Game center achievements

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about game center achievements state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

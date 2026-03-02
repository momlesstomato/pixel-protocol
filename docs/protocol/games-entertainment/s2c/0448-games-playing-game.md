---
title: games.playing_game
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `448`
- **Header**: `PLAYING_GAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Playing game

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about playing game state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

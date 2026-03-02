---
title: room.place_bot
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1592`
- **Header**: `BOT_PLACE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Place a bot from inventory into the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botId` | `int32` | required | Inventory ID of the bot to place. |
| `x` | `int32` | required | Target tile X coordinate. |
| `y` | `int32` | required | Target tile Y coordinate. |

## Behavior

### Sender
Sent by the room owner to deploy a bot from their inventory into the room at a specific tile.


### Receiver
The server spawns the bot in the room. Confirmed in GLADIATOR.

## Notes

- No additional notes

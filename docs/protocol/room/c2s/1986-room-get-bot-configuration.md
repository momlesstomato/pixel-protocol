---
title: room.get_bot_configuration
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1986`
- **Header**: `BOT_CONFIGURATION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the configuration panel for a bot

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botId` | `int32` | required | ID of the bot. |

## Behavior

### Sender
Sent when the room owner opens the bot configuration interface for a specific bot.


### Receiver
The server responds with `room.bot_configuration` (s2c 1618). Confirmed in GLADIATOR.

## Notes

- No additional notes

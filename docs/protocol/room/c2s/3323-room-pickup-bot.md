---
title: room.pickup_bot
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3323`
- **Header**: `BOT_PICKUP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a bot from the room into inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botId` | `int32` | required | Room entity ID of the bot to remove. |

## Behavior

### Sender
Sent by the room owner to return a bot from the room to their inventory.


### Receiver
The server removes the bot from the room and returns it to inventory. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: user.bot_removed
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `233`
- **Header**: `USER_BOT_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a bot from the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botId` | `int32` | required | Bot identifier that was removed. |

## Behavior

### Sender
Sent when a bot is placed in a room or traded away.


### Receiver
The client removes the bot from the inventory list.

## Notes

- No additional notes

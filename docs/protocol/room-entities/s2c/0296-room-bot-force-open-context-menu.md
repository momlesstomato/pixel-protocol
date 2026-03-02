---
title: room.bot_force_open_context_menu
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `296`
- **Header**: `BOT_FORCE_OPEN_CONTEXT_MENU`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bot force open context menu

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bot force open context menu.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

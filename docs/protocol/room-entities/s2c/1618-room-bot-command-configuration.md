---
title: room.bot_command_configuration
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1618`
- **Header**: `BOT_COMMAND_CONFIGURATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bot command configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bot command configuration.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

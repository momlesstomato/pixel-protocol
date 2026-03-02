---
title: room.bot_error
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `639`
- **Header**: `BOT_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bot error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bot error.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

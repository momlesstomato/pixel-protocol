---
title: room.bot_received
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3684`
- **Header**: `BOT_RECEIVED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bot received

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bot received.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

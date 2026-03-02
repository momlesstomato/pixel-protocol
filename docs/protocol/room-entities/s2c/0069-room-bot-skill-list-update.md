---
title: room.bot_skill_list_update
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `69`
- **Header**: `BOT_SKILL_LIST_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bot skill list update

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bot skill list update.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

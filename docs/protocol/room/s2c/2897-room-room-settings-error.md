---
title: room.room_settings_error
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2897`
- **Header**: `ROOM_SETTINGS_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Room settings error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about room settings error.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

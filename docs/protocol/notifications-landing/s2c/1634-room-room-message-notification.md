---
title: room.room_message_notification
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1634`
- **Header**: `ROOM_MESSAGE_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Room message notification

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `string` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about room message notification.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

---
title: room.hand_item_received
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `354`
- **Header**: `HAND_ITEM_RECEIVED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Hand item received

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about hand item received.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

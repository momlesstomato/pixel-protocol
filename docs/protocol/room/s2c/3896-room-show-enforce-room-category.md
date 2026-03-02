---
title: room.show_enforce_room_category
sidebar_position: 53
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3896`
- **Header**: `SHOW_ENFORCE_ROOM_CATEGORY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show enforce room category

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about show enforce room category.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

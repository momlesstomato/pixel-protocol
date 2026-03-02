---
title: room.room_ad_error
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1759`
- **Header**: `ROOM_AD_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Room ad error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about room ad error.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

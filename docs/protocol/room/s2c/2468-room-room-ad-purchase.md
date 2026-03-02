---
title: room.room_ad_purchase
sidebar_position: 42
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2468`
- **Header**: `ROOM_AD_PURCHASE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Room ad purchase

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |
| `field4` | `string` | required | Field extracted from parser source. |
| `field5` | `boolean` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about room ad purchase.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

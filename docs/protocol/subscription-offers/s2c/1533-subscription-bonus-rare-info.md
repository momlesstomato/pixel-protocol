---
title: subscription.bonus_rare_info
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1533`
- **Header**: `BONUS_RARE_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Bonus rare info

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |
| `field4` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about bonus rare info.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

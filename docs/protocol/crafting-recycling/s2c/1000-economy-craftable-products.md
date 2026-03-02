---
title: economy.craftable_products
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1000`
- **Header**: `CRAFTABLE_PRODUCTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Crafting & Recycling
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Craftable products

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about craftable products.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

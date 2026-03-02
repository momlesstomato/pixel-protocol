---
title: economy.crafting_recipes_available
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2124`
- **Header**: `CRAFTING_RECIPES_AVAILABLE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Crafting & Recycling
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Crafting recipes available

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `boolean` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about crafting recipes available.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

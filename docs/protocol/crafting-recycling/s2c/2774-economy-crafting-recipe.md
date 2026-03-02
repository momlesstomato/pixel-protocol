---
title: economy.crafting_recipe
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2774`
- **Header**: `CRAFTING_RECIPE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Crafting & Recycling
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Crafting recipe

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about crafting recipe.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

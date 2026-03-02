---
title: economy.crafting_result
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `618`
- **Header**: `CRAFTING_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Crafting & Recycling
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Crafting result

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about crafting result.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

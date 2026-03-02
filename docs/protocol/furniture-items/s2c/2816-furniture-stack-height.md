---
title: furniture.stack_height
sidebar_position: 48
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2816`
- **Header**: `ITEM_STACK_HELPER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the effective stack height of a tile

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the stack-helper tile. |
| `height` | `int32` | required | Current effective height in hundredths. |

## Behavior

### Sender
Sent in response to a stack-height query or when a stack-helper tile height changes.


### Receiver
The client updates the tile's effective placement height. Confirmed in GLADIATOR.

## Notes

- No additional notes

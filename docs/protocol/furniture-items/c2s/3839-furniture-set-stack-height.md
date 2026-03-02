---
title: furniture.set_stack_height
sidebar_position: 61
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3839`
- **Header**: `ITEM_STACK_HELPER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the stack height of a stack-helper tile

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the stack-helper tile. |
| `height` | `int32` | required | Target height value in hundredths of a tile unit. |

## Behavior

### Sender
Sent when the user adjusts the height of a stack-helper tile in the room editor.


### Receiver
The server updates the effective tile height. Confirmed in GLADIATOR.

## Notes

- No additional notes

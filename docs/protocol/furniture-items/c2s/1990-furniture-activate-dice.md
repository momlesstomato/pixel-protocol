---
title: furniture.activate_dice
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1990`
- **Header**: `ITEM_DICE_CLICK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Activate a dice item to roll it

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the dice. |

## Behavior

### Sender
Sent when the user clicks a dice furniture item to roll it.


### Receiver
The server rolls the dice and broadcasts the result via `furniture.dice_value` (s2c 3431). Confirmed in GLADIATOR.

## Notes

- No additional notes

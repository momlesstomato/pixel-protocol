---
title: furniture.dice_value
sidebar_position: 53
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3431`
- **Header**: `FURNITURE_STATE_2`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a dice roll result

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the dice. |
| `value` | `int32` | required | Dice roll result (-1 = dice closed, 1-6 for standard dice). |

## Behavior

### Sender
Sent after a dice furniture item is rolled to broadcast the result to all room occupants.


### Receiver
The client animates the dice roll and displays the result value. Confirmed in GLADIATOR.

## Notes

- No additional notes

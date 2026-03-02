---
title: furniture.deactivate_dice
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1533`
- **Header**: `ITEM_DICE_CLOSE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Stop or close a dice item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the dice. |

## Behavior

### Sender
Sent when the user clicks a dice furniture item to close it without rolling.


### Receiver
The server hides the dice result. Confirmed in GLADIATOR.

## Notes

- No additional notes

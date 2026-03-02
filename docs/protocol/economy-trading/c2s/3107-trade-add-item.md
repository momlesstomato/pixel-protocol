---
title: trade.add_item
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3107`
- **Header**: `TRADE_ITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a single item to the trade offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item identifier to add to the trade. |

## Behavior

### Sender
Sent when the player drags an item from their inventory into the trade window.


### Receiver
The server validates the item belongs to the player, is tradeable, and adds it to the trade session. Both users receive an updated trade list. Confirmed in GLADIATOR.

## Notes

- No additional notes

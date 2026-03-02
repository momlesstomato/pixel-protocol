---
title: trade.remove_item
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3845`
- **Header**: `TRADE_ITEM_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove an item from the trade offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item identifier to remove from the trade. |

## Behavior

### Sender
Sent when the player removes an item from their side of the trade window.


### Receiver
The server removes the item from the trade session and sends an updated trade list to both users. Any previous acceptance is reset. Confirmed in GLADIATOR.

## Notes

- No additional notes

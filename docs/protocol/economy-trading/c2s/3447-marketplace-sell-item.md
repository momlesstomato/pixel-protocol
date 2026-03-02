---
title: marketplace.sell_item
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3447`
- **Header**: `MARKETPLACE_SELL_ITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: List an item for sale on the Marketplace

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sellingPrice` | `int32` | required | Asking price in credits. |
| `unknown` | `int32` | required | Unknown parameter. |
| `itemId` | `int32` | required | Inventory item identifier to sell. |

## Behavior

### Sender
Sent when the player confirms putting an inventory item up for sale at a specified price.


### Receiver
The server validates the item is eligible, removes it from inventory, creates a Marketplace listing, and responds with the posting result. Confirmed in GLADIATOR.

## Notes

- No additional notes

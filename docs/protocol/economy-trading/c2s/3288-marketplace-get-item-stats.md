---
title: marketplace.get_item_stats
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3288`
- **Header**: `REQUEST_MARKETPLACE_ITEM_STATS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request price statistics for a Marketplace item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `unknown` | `int32` | required | Unknown parameter. |
| `itemId` | `int32` | required | Sprite identifier of the item to query. |

## Behavior

### Sender
Sent when the player views the price history for a specific item type.


### Receiver
The server responds with average price, current offer count, and daily price/volume history. Confirmed in GLADIATOR.

## Notes

- No additional notes

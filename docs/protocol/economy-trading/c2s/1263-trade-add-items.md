---
title: trade.add_items
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1263`
- **Header**: `TRADE_ITEMS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add multiple items to the trade offer at once

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of item identifiers that follow. |
| `itemIds` | `list&lt;int32&gt;` | required | Inventory item identifiers to add to the trade. |

## Behavior

### Sender
Sent when the player selects multiple items to trade simultaneously.


### Receiver
The server validates and adds all specified items to the trade session and sends an updated trade list to both participants.

## Notes

- No additional notes

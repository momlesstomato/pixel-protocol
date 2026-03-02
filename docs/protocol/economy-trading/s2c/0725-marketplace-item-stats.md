---
title: marketplace.item_stats
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `725`
- **Header**: `MARKETPLACE_ITEM_STATS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver price statistics for a Marketplace item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `averagePrice` | `int32` | required | Overall average selling price. |
| `currentOfferCount` | `int32` | required | Number of currently active offers for this item. |
| `historyLength` | `int32` | required | Number of days in the price history. |
| `dayCount` | `int32` | required | Number of day entries in the history array. |
| `history` | `list&lt;object&gt;` | required | Daily entries with dayOffset (int32), average (int32), and soldAmount (int32). |
| `furniCategoryId` | `int32` | required | Furniture category identifier. |
| `furniTypeId` | `int32` | required | Furniture type identifier. |

## Behavior

### Sender
Sent in response to an item stats request.


### Receiver
The client displays a price history chart with daily averages and trade volumes.

## Notes

- No additional notes

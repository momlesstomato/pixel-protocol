---
title: trade.list_item
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2024`
- **Header**: `TRADE_LIST_ITEM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the trade item lists for both users

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstUserId` | `int32` | required | Room entity ID of the first trader. |
| `firstUserItems` | `list&lt;object&gt;` | required | Items offered by the first user (ItemDataStructure per item). |
| `firstUserNumItems` | `int32` | required | Total item count for the first user. |
| `firstUserNumCredits` | `int32` | required | Credit value for the first user. |
| `secondUserId` | `int32` | required | Room entity ID of the second trader. |
| `secondUserItems` | `list&lt;object&gt;` | required | Items offered by the second user. |
| `secondUserNumItems` | `int32` | required | Total item count for the second user. |
| `secondUserNumCredits` | `int32` | required | Credit value for the second user. |

## Behavior

### Sender
Sent whenever items are added or removed from either side of the trade.


### Receiver
The client refreshes the trade window showing both users' offered items.

## Notes

- No additional notes

---
title: user.unseen_reset_items
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2343`
- **Header**: `UNSEEN_RESET_ITEMS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mark specific unseen items as seen

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `int32` | required | Inventory category the items belong to |
| `count` | `int32` | required | Number of item ID values that follow |

## Behavior

### Sender
Sent to acknowledge individual items within a category as seen, rather than clearing the entire category at once.


### Receiver
The server clears the unseen flag for each listed item. No response packet is sent.

## Notes

- After `count`, each entry is a single `int32` itemId.

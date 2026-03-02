---
title: user.unseen_reset_category
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3493`
- **Header**: `UNSEEN_RESET_CATEGORY`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mark all unseen items in a category as seen

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `int32` | required | Integer identifying the inventory category to reset. Values are server-defined; see `user.unseen_items` (s2c 2103) for the categories the server uses.<br/> |

## Behavior

### Sender
Sent to acknowledge and clear the unseen notification badge for an entire inventory category at once. All items in the category are marked as seen without listing individual IDs.


### Receiver
The server clears the unseen flags for all items in the specified category. No response packet is sent.

## Notes

- No additional notes

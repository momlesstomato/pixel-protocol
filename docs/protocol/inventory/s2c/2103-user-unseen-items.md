---
title: user.unseen_items
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2103`
- **Header**: `UNSEEN_ITEMS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of new unseen items in the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categoryCount` | `int32` | required | Number of category groups that follow |

## Behavior

### Sender
Sent after login and when new items arrive in the inventory. Groups item IDs by category so the client can show per-category notification badges.


### Receiver
The client shows unseen badges on inventory tabs and highlights new items in each category.

## Notes

- Each category group: `int32` category, `int32` itemCount, then `itemCount` × `int32` itemId.


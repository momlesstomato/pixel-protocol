---
title: marketplace.item_posted
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1359`
- **Header**: `MARKETPLACE_ITEM_POSTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that an item was listed on the Marketplace

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | Posting result code (1=success). |

## Behavior

### Sender
Sent after a successful sell-item request.


### Receiver
The client shows a success notification and removes the item from the local inventory.

## Notes

- No additional notes

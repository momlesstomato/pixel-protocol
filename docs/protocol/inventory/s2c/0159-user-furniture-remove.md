---
title: user.furniture_remove
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `159`
- **Header**: `USER_FURNITURE_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a furniture item from inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item identifier that was removed. |

## Behavior

### Sender
Sent when a furniture item is placed, traded, or deleted.


### Receiver
The client removes the item from the furniture grid.

## Notes

- No additional notes

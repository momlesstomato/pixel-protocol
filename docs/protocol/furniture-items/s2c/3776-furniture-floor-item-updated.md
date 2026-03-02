---
title: furniture.floor_item_updated
sidebar_position: 56
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3776`
- **Header**: `FURNITURE_FLOOR_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a floor item moved or changed state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item` | `object` | required | Updated floor item record (same structure as `furniture.floor_items`). |

## Behavior

### Sender
Sent when a floor furniture item is rotated, moved, or its state changes.


### Receiver
The client updates the item's position, rotation, and state. Confirmed in GLADIATOR.

## Notes

- No additional notes

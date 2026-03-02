---
title: furniture.item_data_updated
sidebar_position: 41
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2202`
- **Header**: `FURNITURE_ITEMDATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a single item's data changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |
| `dataType` | `int32` | required | Typed extra data format identifier. |
| `data` | `string` | required | New extra data value (format depends on `dataType`). |

## Behavior

### Sender
Sent when a single furniture item's extra data changes during room activity (e.g. a score board updates).


### Receiver
The client updates the item's displayed state. Confirmed in GLADIATOR.

## Notes

- No additional notes

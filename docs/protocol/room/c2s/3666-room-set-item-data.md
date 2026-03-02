---
title: room.set_item_data
sidebar_position: 53
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3666`
- **Header**: `SET_ITEM_DATA`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the data of a floor item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Floor item ID. |
| `data` | `string` | required | New extra data value. |

## Behavior

### Sender
Sent to update a floor item's extra data string.


### Receiver
The server persists the new extra data for the item. Confirmed in GLADIATOR.

## Notes

- No additional notes

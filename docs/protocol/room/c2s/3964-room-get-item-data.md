---
title: room.get_item_data
sidebar_position: 55
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3964`
- **Header**: `GET_ITEM_DATA`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request extra data for a specific room item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Floor item ID. |

## Behavior

### Sender
Sent to fetch the current extra data state of a floor item.


### Receiver
The server returns the item's extra data. Confirmed in GLADIATOR.

## Notes

- No additional notes

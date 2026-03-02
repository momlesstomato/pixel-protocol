---
title: room.update_category_trade
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1265`
- **Header**: `ROOM_SETTINGS_UPDATE_ROOM_CATEGORY_AND_TRADE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update room category and trade settings independently

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room. |
| `categoryId` | `int32` | required | New navigator category identifier. |
| `tradeState` | `int32` | required | New trade mode value. |

## Behavior

### Sender
Sent when the user updates only the room category and trade mode without submitting the full settings form.


### Receiver
The server updates the category and trade mode fields. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.wall_item_updated
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2009`
- **Header**: `ITEM_WALL_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a wall item changed state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item` | `object` | required | Updated wall item record. |

## Behavior

### Sender
Sent when a wall furniture item's state or content changes.


### Receiver
The client updates the wall item's visual state. Confirmed in GLADIATOR.

## Notes

- No additional notes

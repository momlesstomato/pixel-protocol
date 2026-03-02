---
title: furniture.wired_condition
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1108`
- **Header**: `WIRED_CONDITION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver wired condition configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired condition. |
| `selectedItems` | `int32[]` | required | IDs of currently linked room items. |
| `conditionTypeId` | `int32` | required | Wired condition type identifier. |
| `conditionData` | `string` | required | Serialized condition-specific configuration. |

## Behavior

### Sender
Sent in response to `furniture.open_wired` (c2s 768) for a wired condition furniture item.


### Receiver
The client populates the wired condition editor. Confirmed in GLADIATOR.

## Notes

- No additional notes

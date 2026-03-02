---
title: furniture.save_wired_condition
sidebar_position: 52
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3203`
- **Header**: `WIRED_CONDITION_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save wired condition configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired condition. |
| `selectedItems` | `int32[]` | required | IDs of room items linked to this condition. |
| `conditionTypeId` | `int32` | required | Wired condition type identifier. |
| `conditionData` | `string` | required | Condition-specific configuration data. |

## Behavior

### Sender
Sent when the user saves the configuration of a wired condition item.


### Receiver
The server stores the configuration and sends `furniture.wired_saved` (s2c 1155). Confirmed in GLADIATOR.

## Notes

- No additional notes

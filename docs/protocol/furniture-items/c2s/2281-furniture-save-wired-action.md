---
title: furniture.save_wired_action
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2281`
- **Header**: `WIRED_ACTION_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save wired action configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired action. |
| `delay` | `int32` | required | Execution delay in milliseconds. |
| `selectedItems` | `int32[]` | required | IDs of room items linked to this action. |
| `actionTypeId` | `int32` | required | Wired action type identifier. |
| `actionData` | `string` | required | Action-specific configuration data. |

## Behavior

### Sender
Sent when the user saves the configuration of a wired action item.


### Receiver
The server stores the configuration and sends `furniture.wired_saved` (s2c 1155). Confirmed in GLADIATOR.

## Notes

- No additional notes

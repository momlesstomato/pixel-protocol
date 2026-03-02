---
title: furniture.save_wired_trigger
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1520`
- **Header**: `WIRED_TRIGGER_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save wired trigger configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired trigger. |
| `delay` | `int32` | required | Execution delay in milliseconds. |
| `selectedItems` | `int32[]` | required | IDs of room items linked to this trigger. |
| `triggerTypeId` | `int32` | required | Wired trigger type identifier. |
| `triggerData` | `string` | required | Trigger-specific configuration data. |

## Behavior

### Sender
Sent when the user saves the configuration of a wired trigger item.


### Receiver
The server stores the configuration and sends `furniture.wired_saved` (s2c 1155) on success. Confirmed in GLADIATOR.

## Notes

- No additional notes

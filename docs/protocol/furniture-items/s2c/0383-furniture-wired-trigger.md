---
title: furniture.wired_trigger
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `383`
- **Header**: `WIRED_TRIGGER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver wired trigger configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired trigger. |
| `delay` | `int32` | required | Current execution delay. |
| `selectedItems` | `int32[]` | required | IDs of currently linked room items. |
| `triggerTypeId` | `int32` | required | Wired trigger type identifier. |
| `triggerData` | `string` | required | Serialized trigger-specific configuration. |

## Behavior

### Sender
Sent in response to `furniture.open_wired` (c2s 768) for a wired trigger furniture item.


### Receiver
The client populates the wired trigger editor. Confirmed in GLADIATOR.

## Notes

- No additional notes

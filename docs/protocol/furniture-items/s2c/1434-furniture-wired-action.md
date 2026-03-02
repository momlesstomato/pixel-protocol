---
title: furniture.wired_action
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1434`
- **Header**: `WIRED_ACTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver wired action configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired action. |
| `delay` | `int32` | required | Current execution delay in milliseconds. |
| `selectedItems` | `int32[]` | required | IDs of currently linked room items. |
| `actionTypeId` | `int32` | required | Wired action type identifier. |
| `actionData` | `string` | required | Serialized action-specific configuration. |

## Behavior

### Sender
Sent in response to `furniture.open_wired` (c2s 768) for a wired action furniture item.


### Receiver
The client populates the wired action editor with the received configuration. Confirmed in GLADIATOR.

## Notes

- No additional notes

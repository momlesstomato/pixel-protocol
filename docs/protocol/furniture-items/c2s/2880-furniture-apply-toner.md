---
title: furniture.apply_toner
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2880`
- **Header**: `ROOM_TONER_APPLY`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Apply background toner settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the toner furniture. |
| `enabled` | `int32` | required | 1 to enable, 0 to disable. |
| `hue` | `int32` | required | Hue value (0-255). |
| `saturation` | `int32` | required | Saturation value (0-255). |
| `value` | `int32` | required | Value/brightness level (0-255). |

## Behavior

### Sender
Sent when the user adjusts the hue, saturation, and value of the background toner furniture item.


### Receiver
The server applies the toner effect to the room background. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.click_color_wheel
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2144`
- **Header**: `ITEM_COLOR_WHEEL_CLICK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Interact with a color-wheel furniture item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the color wheel. |

## Behavior

### Sender
Sent when the user spins a color-wheel furniture item to change its displayed color.


### Receiver
The server cycles the color and broadcasts the new state. Confirmed in GLADIATOR.

## Notes

- No additional notes

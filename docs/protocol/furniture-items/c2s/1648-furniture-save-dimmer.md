---
title: furniture.save_dimmer
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1648`
- **Header**: `ITEM_DIMMER_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save a dimmer preset configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effectId` | `int32` | required | Preset slot (1-3). |
| `color` | `int32` | required | Color value in RGB hex. |
| `brightness` | `int32` | required | Brightness level (0-255). |
| `backgroundOnly` | `int32` | required | 1 if the effect applies to background only, 0 otherwise. |

## Behavior

### Sender
Sent when the user saves a new dimmer preset with color, intensity, and background-only settings.


### Receiver
The server stores the preset. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.dimmer_presets
sidebar_position: 47
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2710`
- **Header**: `ITEM_DIMMER_SETTINGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the dimmer preset configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `presetCount` | `int32` | required | Number of presets (typically 3). |
| `currentPreset` | `int32` | required | Index of the currently active preset (1-3). |
| `presets` | `object[]` | required | Array of preset records. Each contains: `presetId` (int32), `backgroundOnly` (int32), `color` (int32), `brightness` (int32).<br/> |

## Behavior

### Sender
Sent in response to `furniture.get_dimmer_settings` (c2s 2813) with the three available presets and the active preset index.


### Receiver
The client populates the dimmer control panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

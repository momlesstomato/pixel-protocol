---
title: furniture.get_dimmer_settings
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2813`
- **Header**: `ITEM_DIMMER_SETTINGS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the dimmer preset configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the dimmer/moodlight furniture. |

## Behavior

### Sender
Sent when the user opens the dimmer (moodlight) control panel.


### Receiver
The server responds with `furniture.dimmer_presets` (s2c 2710). Confirmed in GLADIATOR.

## Notes

- No additional notes

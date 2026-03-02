---
title: navigator.settings_save
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3159`
- **Header**: `NAVIGATOR_SETTINGS_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Persist the navigator window layout preferences

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `windowX` | `int32` | required | Horizontal screen position of the navigator window. |
| `windowY` | `int32` | required | Vertical screen position of the navigator window. |
| `windowWidth` | `int32` | required | Width of the navigator window in pixels. |
| `windowHeight` | `int32` | required | Height of the navigator window in pixels. |
| `leftPanelHidden` | `boolean` | required | Whether the left search-filter panel is hidden.<br/> |
| `resultsMode` | `int32` | required | Display mode for search results: 0 = list view, 1 = thumbnail view, 2 = thumbnail-only (no mode toggle).<br/> |

## Behavior

### Sender
Sent whenever the user repositions or resizes the navigator window, or toggles the left panel. The server persists these values and restores them via `navigator.settings` (s2c 518) on the next `navigator.init` (c2s 2110).


### Receiver
The server updates the stored window settings for the user. No response packet is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

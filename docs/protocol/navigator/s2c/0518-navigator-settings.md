---
title: navigator.settings
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `518`
- **Header**: `NAVIGATOR_SETTINGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the user's saved navigator window layout settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `windowX` | `int32` | required | Horizontal screen position of the navigator window. |
| `windowY` | `int32` | required | Vertical screen position of the navigator window. |
| `windowWidth` | `int32` | required | Width of the navigator window in pixels. |
| `windowHeight` | `int32` | required | Height of the navigator window in pixels. |
| `leftPanelHidden` | `boolean` | required | Whether the left search-filter panel is hidden. |
| `resultsMode` | `int32` | required | Display mode for search results: 0 = list view, 1 = thumbnail view, 2 = thumbnail-only (no mode toggle).<br/> |

## Behavior

### Sender
Sent as part of the navigator init burst triggered by `navigator.init` (c2s 2110). Restores the navigator window to the position, size, and display mode the user had when they last closed it.


### Receiver
The client positions and sizes the navigator window according to the received values and sets the left panel visibility and results mode. Confirmed in GLADIATOR.

## Notes

- No additional notes

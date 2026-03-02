---
title: navigator.category_mode
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1202`
- **Header**: `NAVIGATOR_CATEGORY_LIST_MODE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the display mode for a navigator category

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | required | Search category code whose display mode is being set. |
| `listMode` | `int32` | required | Display mode integer: 0 = list, 1 = thumbnails, 2 = thumbnails without mode toggle.<br/> |

## Behavior

### Sender
Sent when the user toggles the display mode (list vs thumbnail) for a specific search category. The server persists this preference.


### Receiver
The server records the list mode for the identified category. No response packet is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

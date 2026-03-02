---
title: furniture.save_mannequin_name
sidebar_position: 45
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2850`
- **Header**: `MANNEQUIN_SAVE_NAME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save a name for a mannequin

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the mannequin. |
| `name` | `string` | required | New mannequin display name. |

## Behavior

### Sender
Sent when the user sets or updates the display name of a mannequin furniture item.


### Receiver
The server updates the mannequin's name. Confirmed in GLADIATOR.

## Notes

- No additional notes

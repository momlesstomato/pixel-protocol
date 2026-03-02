---
title: furniture.save_mannequin_look
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2209`
- **Header**: `MANNEQUIN_SAVE_LOOK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save the current avatar look to a mannequin

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the mannequin. |

## Behavior

### Sender
Sent when the user saves their current outfit and gender to a mannequin furniture item.


### Receiver
The server updates the mannequin's figure string. Confirmed in GLADIATOR.

## Notes

- No additional notes

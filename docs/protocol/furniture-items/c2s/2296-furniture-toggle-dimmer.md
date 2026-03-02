---
title: furniture.toggle_dimmer
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2296`
- **Header**: `ITEM_DIMMER_TOGGLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle the dimmer on or off

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the dimmer furniture. |

## Behavior

### Sender
Sent when the user switches the dimmer (moodlight) between on and off states.


### Receiver
The server toggles the active state of the moodlight. Confirmed in GLADIATOR.

## Notes

- No additional notes

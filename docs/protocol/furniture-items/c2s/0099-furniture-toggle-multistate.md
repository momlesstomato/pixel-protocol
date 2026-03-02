---
title: furniture.toggle_multistate
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `99`
- **Header**: `FURNITURE_MULTISTATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle the state of a multistate floor furniture item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |

## Behavior

### Sender
Sent when the user interacts with a multistate furniture item to cycle its state.


### Receiver
The server advances the item to the next state. Confirmed in GLADIATOR.

## Notes

- No additional notes

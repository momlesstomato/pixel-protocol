---
title: furniture.toggle_wall_multistate
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `210`
- **Header**: `FURNITURE_WALL_MULTISTATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle the state of a multistate wall furniture item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room wall item ID. |

## Behavior

### Sender
Sent when the user interacts with a multistate wall furniture item.


### Receiver
The server advances the wall item to the next state. Confirmed in GLADIATOR.

## Notes

- No additional notes

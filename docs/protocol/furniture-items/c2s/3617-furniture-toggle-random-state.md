---
title: furniture.toggle_random_state
sidebar_position: 59
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3617`
- **Header**: `FURNITURE_RANDOMSTATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Trigger a random state change on a furniture item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |

## Behavior

### Sender
Sent when the user activates a furniture item that selects its state randomly.


### Receiver
The server randomizes the item state. Confirmed in GLADIATOR.

## Notes

- No additional notes

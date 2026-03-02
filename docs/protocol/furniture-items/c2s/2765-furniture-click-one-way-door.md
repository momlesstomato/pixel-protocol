---
title: furniture.click_one_way_door
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2765`
- **Header**: `ONE_WAY_DOOR_CLICK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Interact with a one-way door furniture item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the one-way door. |

## Behavior

### Sender
Sent when the user clicks a one-way door to pass through it.


### Receiver
The server checks if passage is allowed from the user's current side and moves the avatar. Confirmed in GLADIATOR.

## Notes

- No additional notes

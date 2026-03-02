---
title: user.clothing
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1450`
- **Header**: `USER_CLOTHING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the player's unlocked clothing sets

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `figureSetIds` | `list&lt;int32&gt;` | required | List of unlocked figure set identifiers. |
| `boundFurnitureNames` | `list&lt;string&gt;` | required | List of furniture product codes bound to clothing sets. |

## Behavior

### Sender
Sent on login or when clothing items are redeemed.


### Receiver
The client uses this to determine which figure set pieces the player owns.

## Notes

- No additional notes

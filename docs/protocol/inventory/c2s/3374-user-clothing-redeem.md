---
title: user.clothing_redeem
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3374`
- **Header**: `ITEM_CLOTHING_REDEEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Redeem a clothing item from furniture

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Inventory item identifier of the clothing reward furniture. |

## Behavior

### Sender
Sent when the player activates a clothing reward furniture item to unlock an outfit piece.


### Receiver
The server validates the furniture item, unlocks the clothing set for the player, and removes the furniture from inventory. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: room_entities.drop_hand_item
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2814`
- **Header**: `UNIT_DROP_HAND_ITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Drop the currently held hand item

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user discards the hand-held item they are currently carrying.


### Receiver
The server removes the hand item from the avatar. Confirmed in GLADIATOR.

## Notes

- No additional notes

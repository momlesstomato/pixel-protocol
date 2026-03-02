---
title: room_entities.give_hand_item
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2941`
- **Header**: `UNIT_GIVE_HANDITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Give the hand item to another user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | Room index of the user to receive the hand item. |

## Behavior

### Sender
Sent when the user passes a hand-held item to another avatar in the room.


### Receiver
The server transfers the hand item and broadcasts `room_entities.hand_item` (s2c 1474) to both parties. Confirmed in GLADIATOR.

## Notes

- No additional notes

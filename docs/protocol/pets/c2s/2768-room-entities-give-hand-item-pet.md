---
title: room_entities.give_hand_item_pet
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2768`
- **Header**: `UNIT_GIVE_HANDITEM_PET`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Give the hand item to a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |

## Behavior

### Sender
Sent when the user passes a hand-held item to a pet in the room.


### Receiver
The server transfers the hand item to the pet. Confirmed in GLADIATOR.

## Notes

- No additional notes

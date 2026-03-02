---
title: room.select_pet
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `549`
- **Header**: `PET_SELECTED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Select a pet in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the selected pet. |

## Behavior

### Sender
Sent when the user clicks on a pet entity in the room to select it, triggering the pet interaction UI.


### Receiver
The server sends the pet information and available interactions. Confirmed in GLADIATOR.

## Notes

- No additional notes

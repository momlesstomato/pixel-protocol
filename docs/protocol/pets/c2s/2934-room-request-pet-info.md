---
title: room.request_pet_info
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2934`
- **Header**: `PET_INFO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request detailed information about a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Room entity ID of the pet. |

## Behavior

### Sender
Sent when the user clicks on a pet in the room to view its information panel.


### Receiver
The server responds with `room.pet_info` (s2c 2901). Confirmed in GLADIATOR.

## Notes

- No additional notes

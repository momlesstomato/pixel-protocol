---
title: room.breed_pets
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1638`
- **Header**: `PETS_BREED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Initiate breeding between two pets

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId1` | `int32` | required | Room entity ID of the first pet. |
| `petId2` | `int32` | required | Room entity ID of the second pet. |

## Behavior

### Sender
Sent when the user initiates a breeding session between two compatible pets in the room.


### Receiver
The server begins the breeding flow. Confirmed in GLADIATOR.

## Notes

- No additional notes

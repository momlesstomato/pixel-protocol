---
title: pet.cancel_breeding
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2713`
- **Header**: `PET_CANCEL_BREEDING`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cancel an in-progress pet breeding session

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier involved in the breeding session. |

## Behavior

### Sender
Sent when the player declines the breeding confirmation dialog.


### Receiver
The server cancels the breeding session and returns both pets to their normal state. Confirmed in GLADIATOR.

## Notes

- No additional notes

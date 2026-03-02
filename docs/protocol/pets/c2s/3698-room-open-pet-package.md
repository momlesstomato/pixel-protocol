---
title: room.open_pet_package
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3698`
- **Header**: `PET_OPEN_PACKAGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Open a pet package to reveal a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objectId` | `int32` | required | Room object ID of the pet package furniture item. |
| `petName` | `string` | required | Name chosen for the pet being born. |

## Behavior

### Sender
Sent when the user interacts with an unopened pet package furniture item.


### Receiver
The server processes the opening and responds with pet creation data. Confirmed in GLADIATOR.

## Notes

- No additional notes

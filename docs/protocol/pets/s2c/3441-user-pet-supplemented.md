---
title: user.pet_supplemented
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3441`
- **Header**: `PET_SUPPLEMENT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a pet has received a supplement

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | ID of the pet that received the supplement |
| `userId` | `int32` | required | ID of the user who gave the supplement |
| `supplementType` | `int32` | required | Supplement type identifier |

## Behavior

### Sender
Sent to the room when a user gives a supplement item to a pet. Identifies the pet, the user who gave the supplement, and the supplement type identifier.


### Receiver
The client triggers the supplement interaction animation for the identified pet and user pair in the room.

## Notes

- No additional notes

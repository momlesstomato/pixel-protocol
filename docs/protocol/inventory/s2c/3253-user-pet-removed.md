---
title: user.pet_removed
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3253`
- **Header**: `USER_PET_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a pet from the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier that was removed. |

## Behavior

### Sender
Sent when a pet is placed in a room or traded.


### Receiver
The client removes the pet from the inventory pet list.

## Notes

- No additional notes

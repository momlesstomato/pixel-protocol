---
title: pet.confirm_breeding_result
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1625`
- **Header**: `PET_CONFIRM_BREEDING_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the breeding nest confirmation result

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breedingNestStuffId` | `int32` | required | Breeding nest furniture identifier. |
| `result` | `int32` | required | Confirmation result code. |

## Behavior

### Sender
Sent after a breeding confirmation request is processed.


### Receiver
The client shows whether the breeding will proceed.

## Notes

- No additional notes

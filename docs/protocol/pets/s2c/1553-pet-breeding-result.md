---
title: pet.breeding_result
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1553`
- **Header**: `PET_BREEDING_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the result of a completed pet breeding

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resultData` | `object` | required | Offspring data: stuffId (int32), classId (int32), productCode (string), userId (int32), userName (string), rarityLevel (int32), hasMutation (boolean). |
| `otherResultData` | `object` | required | Second offspring data with the same structure (for the other owner). |

## Behavior

### Sender
Sent when the breeding process finishes and offspring is determined.


### Receiver
The client shows the offspring result with rarity and mutation information.

## Notes

- No additional notes

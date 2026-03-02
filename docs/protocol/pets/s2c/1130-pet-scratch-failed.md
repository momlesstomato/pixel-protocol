---
title: pet.scratch_failed
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1130`
- **Header**: `PET_SCRATCH_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that a pet scratch (respect) failed due to age

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentAge` | `int32` | required | Pet's current age in days. |
| `requiredAge` | `int32` | required | Minimum age required in days. |

## Behavior

### Sender
Sent when the player tries to scratch a pet that is too young.


### Receiver
The client shows an error with the age requirement.

## Notes

- No additional notes

---
title: pet.go_to_breeding_nest_failure
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2621`
- **Header**: `PET_GO_TO_BREEDING_NEST_FAILURE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that a pet could not reach the breeding nest

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `int32` | required | Failure reason code (6=pet too tired to breed). |

## Behavior

### Sender
Sent when a pet fails to walk to the breeding nest.


### Receiver
The client shows an error dialog explaining why breeding failed.

## Notes

- No additional notes

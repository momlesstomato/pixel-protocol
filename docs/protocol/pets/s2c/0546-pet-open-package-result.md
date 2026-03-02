---
title: pet.open_package_result
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `546`
- **Header**: `PET_OPEN_PACKAGE_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the result of naming a pet from a package

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objectId` | `int32` | required | Inventory item identifier of the pet package. |
| `nameValidationStatus` | `int32` | required | Name validation result code (0=success). |
| `nameValidationInfo` | `string` | required | Additional validation info or rejected name. |

## Behavior

### Sender
Sent after the player submits a name for the pet being opened.


### Receiver
The client shows a success or error message based on the validation status.

## Notes

- No additional notes

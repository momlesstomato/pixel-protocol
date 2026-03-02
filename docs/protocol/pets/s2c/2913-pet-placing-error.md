---
title: pet.placing_error
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2913`
- **Header**: `PET_PLACING_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate a pet placement error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Placement error reason code. |

## Behavior

### Sender
Sent when trying to place a pet in a room that does not allow it.


### Receiver
The client shows an error notification.

## Notes

- No additional notes

---
title: room.entry_error
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `899`
- **Header**: `ROOM_ENTER_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that room entry has failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Entry error code: 1=full, 2=banned, 4=blocked_by_owner, 5=wrong_password, 6=no_permission, 7=not_enough_aces, 8=queue_error.<br/> |

## Behavior

### Sender
Sent when the server rejects a room entry request. The error code indicates the reason for denial.


### Receiver
The client displays the appropriate error message and may redirect the user. Confirmed in GLADIATOR.

## Notes

- No additional notes

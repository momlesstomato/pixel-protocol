---
title: user.change_name_result
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `118`
- **Header**: `USER_CHANGE_NAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Return the result of a display name change request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resultCode` | `int32` | required | 0 = changed successfully, 4 = too short, 5 = too long, 6 = forbidden characters, 7 = inappropriate words, 8 = already taken, 9 = staff-only prefix<br/> |
| `name` | `string` | required | The name that was evaluated |
| `suggestionCount` | `int32` | required | Number of alternative name suggestions that follow |

## Behavior

### Sender
Sent in response to `user.change_name` (c2s 2977). On success the result code is 0 and the change has been committed. On failure the code indicates why the name was rejected and suggestions may be provided.


### Receiver
The client reads the result code. On success it updates the local username display and closes the name-change flow. On failure it shows suggestions and remains in the flow.

## Notes

- Each suggestion: `string` suggestedName.

---
title: user.check_name_result
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `563`
- **Header**: `CHECK_USER_NAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Return validation result for a candidate display name

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resultCode` | `int32` | required | 0 = valid and available, 4 = too short, 5 = too long, 6 = forbidden characters, 7 = inappropriate words, 8 = already taken, 9 = staff-only prefix<br/> |
| `name` | `string` | required | The candidate name that was evaluated |
| `suggestionCount` | `int32` | required | Number of alternative name suggestions that follow |

## Behavior

### Sender
Sent in response to `user.check_name` (c2s 3950). Provides a result code and optional alternative name suggestions when the requested name is unavailable.


### Receiver
The client shows a validation message. On result code 0 the name is available and the user may confirm. On other codes the client may display suggestions from the list.

## Notes

- Each suggestion: `string` suggestedName.

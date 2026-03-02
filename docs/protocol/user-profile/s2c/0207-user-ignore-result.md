---
title: user.ignore_result
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `207`
- **Header**: `USER_IGNORED_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report the result of an ignore or unignore action

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | Result code: 0 = ignored successfully, 1 = unignored successfully, 2 = already on ignore list, 3 = cannot ignore this user, 4 = user not found, 5 = cannot ignore yourself, 6 = ignore list is full<br/> |
| `name` | `string` | required | Display name of the user the action was attempted on |

## Behavior

### Sender
Sent after any `user.ignore` (c2s 1117), `user.ignore_id` (c2s 3314), or `user.unignore` (c2s 2061) request. The result code indicates success or the reason the action was rejected.


### Receiver
The client reads the result code and either updates the local ignore list or displays an appropriate error notice.

## Notes

- No additional notes

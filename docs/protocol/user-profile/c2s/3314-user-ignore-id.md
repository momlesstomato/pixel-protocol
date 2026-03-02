---
title: user.ignore_id
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3314`
- **Header**: `USER_IGNORE_ID`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a user to the ignore list by user ID

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user to add to the ignore list |

## Behavior

### Sender
Functionally equivalent to `user.ignore` (c2s 1117) but identifies the target by numeric ID rather than username, which is more reliable for users with recently changed names.


### Receiver
The server resolves the ID to a username, adds the entry to the ignore list, and responds with `user.ignore_result` (s2c 207).

## Notes

- No additional notes

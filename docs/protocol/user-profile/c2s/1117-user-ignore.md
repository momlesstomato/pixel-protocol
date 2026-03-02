---
title: user.ignore
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1117`
- **Header**: `USER_IGNORE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a user to the ignore list by username

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Display name of the user to ignore |

## Behavior

### Sender
Sent when the user mutes or ignores another user by display name. Once ignored, chat messages and whispers from that user will be suppressed on the client.


### Receiver
The server adds the target username to the session's ignore list and responds with `user.ignore_result` (s2c 207) indicating success or the reason for failure (not found, already ignored, etc.).

## Notes

- No additional notes

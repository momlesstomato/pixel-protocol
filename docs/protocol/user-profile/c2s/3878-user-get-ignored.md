---
title: user.get_ignored
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3878`
- **Header**: `USER_IGNORED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Fetch the ignored-users list filtered by username prefix

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Username prefix to filter results; empty string returns all |

## Behavior

### Sender
Sent to retrieve the current session's ignore list. The username field acts as a search filter; passing an empty string returns the full list.


### Receiver
The server responds with `user.ignored_users` (s2c 126) containing all matching usernames currently on the ignore list.

## Notes

- No additional notes

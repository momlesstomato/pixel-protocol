---
title: user.unignore
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2061`
- **Header**: `USER_UNIGNORE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a user from the ignore list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Display name of the user to remove from the ignore list |

## Behavior

### Sender
Sent when the user un-mutes a previously ignored user. After removal, chat messages from the target are no longer suppressed.


### Receiver
The server removes the entry from the ignore list and responds with `user.ignore_result` (s2c 207) with a result code indicating the entry was removed.

## Notes

- No additional notes

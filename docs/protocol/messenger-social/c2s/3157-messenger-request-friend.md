---
title: messenger.request_friend
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3157`
- **Header**: `REQUEST_FRIEND`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a friend request to another user by username

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Display name of the user to invite. |

## Behavior

### Sender
Sent when the user submits a friend request from the search panel or another UI entry point. The target is identified by username rather than user ID.


### Receiver
The server resolves the username to a user ID and validates eligibility (block settings, friend list capacity). If the target accepts incoming requests, the server creates a pending friend request and delivers `messenger.friend_request` (s2c 2219) to the target's active session. If the request cannot be sent, the server responds with `messenger.message_error` (s2c 892). Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: messenger.decline_friend
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2890`
- **Header**: `DECLINE_FRIEND`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Decline one or more pending friend requests, or clear all

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `removeAll` | `boolean` | required | When true, all pending friend requests are cleared and the remainder of the payload is ignored.<br/> |
| `count` | `int32` | required | Number of user IDs that follow. Ignored when `removeAll` is true.<br/> |

## Behavior

### Sender
Sent when the user dismisses pending friend requests. When `removeAll` is true the entire pending list is cleared and no user IDs need to follow. When false, only the listed users are declined.


### Receiver
The server deletes the specified pending request records. No confirmation packet is sent. Confirmed in GLADIATOR.

## Notes

- After `count`, each entry is a single `int32` user ID of the requester to decline.

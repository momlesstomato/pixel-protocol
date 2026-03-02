---
title: messenger.accept_friend
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `137`
- **Header**: `ACCEPT_FRIEND`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Accept one or more pending friend requests

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of user IDs that follow. |

## Behavior

### Sender
Sent when the user approves one or more entries in the pending friend request list. Multiple requests can be accepted in a single packet.


### Receiver
The server processes each user ID in order. For each, it verifies the request exists, that both friend lists have capacity, and then creates the bidirectional friendship record. If the sender's own friend list is full, the server stops processing and responds with `messenger.accept_result` (s2c 896) containing the failure details. Confirmed in GLADIATOR.

## Notes

- After `count`, each entry is a single `int32` user ID of the requester to accept.

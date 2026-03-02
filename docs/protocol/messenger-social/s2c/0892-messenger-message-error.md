---
title: messenger.message_error
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `892`
- **Header**: `MESSENGER_MESSAGE_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report a failure when sending a private message or friend request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `senderId` | `int32` | required | User ID involved in the failed operation, or 0 when the error relates to a friend request rather than a message.<br/> |
| `errorCode` | `int32` | required | Error code: 1 = own friend list full, 2 = target friend list full, 3 = target not accepting requests, 4 = target not found.<br/> |

## Behavior

### Sender
Sent when `messenger.chat` (c2s 3567) or a friend request operation fails. The `senderId` is 0 when the error relates to a request rather than a specific message exchange.


### Receiver
The client displays an error in the relevant conversation or request context. Confirmed in GLADIATOR (as FriendRequestErrorComposer).

## Notes

- No additional notes

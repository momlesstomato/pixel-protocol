---
title: messenger.chat
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3567`
- **Header**: `MESSENGER_CHAT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a private message to a friend

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipientId` | `int32` | required | User ID of the friend to whom the message is addressed.<br/> |
| `message` | `string` | required | UTF-8 text body of the private message. |

## Behavior

### Sender
Sent when the user submits text in a private-message conversation window. The recipient must be on the sender's friend list.


### Receiver
The server validates that the two users are friends and that neither has blocked the other. It persists the message and delivers `messenger.chat` (s2c 1587) to the recipient's active session. If delivery fails, it responds with `messenger.message_error` (s2c 892). Confirmed in GLADIATOR and GALAXY.

## Notes

- No additional notes

---
title: messenger.instant_message_error
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3359`
- **Header**: `MESSENGER_INSTANCE_MESSAGE_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report a delivery failure for a specific private message

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Code identifying why the message could not be delivered. |
| `userId` | `int32` | required | User ID of the intended recipient. |
| `message` | `string` | required | The original message text that failed to send. |

## Behavior

### Sender
Sent when a private message sent via `messenger.chat` (c2s 3567) could not be delivered. Provides the error code, the target user ID, and the original message text so the client can display a contextual error.


### Receiver
The client displays the failure reason in the conversation window for the identified user. Confirmed in GLADIATOR (as UnknownMessengerErrorComposer).

## Notes

- No additional notes

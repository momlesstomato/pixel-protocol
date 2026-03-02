---
title: messenger.chat
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1587`
- **Header**: `MESSENGER_CHAT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver an incoming private message from a friend

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `senderId` | `int32` | required | User ID of the friend who sent the message. |
| `messageText` | `string` | required | UTF-8 text content of the private message. |
| `secondsSinceSent` | `int32` | required | Number of seconds that have elapsed since the message was sent. Used to reconstruct the original send timestamp on the client.<br/> |
| `extraData` | `string` | optional | Optional metadata string. Present only when `bytesAvailable` is non-zero after the previous fields. Used for group-chat context such as sender name and figure.<br/> |

## Behavior

### Sender
Pushed to the recipient when a friend sends a private message via `messenger.chat` (c2s 3567). The `secondsSinceSent` field allows the client to display the correct timestamp even when the recipient was offline.


### Receiver
The client opens or updates the conversation window for the sender and displays the message with the appropriate timestamp. The optional `extraData` field carries additional context for group-chat or moderation messages. Confirmed in GLADIATOR.

## Notes

- No additional notes

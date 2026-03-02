---
title: messenger.minimail_count
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2803`
- **Header**: `MESSENGER_MINIMAIL_COUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the current count of unread minimail messages

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of unread minimail messages in the user's inbox. |

## Behavior

### Sender
Sent on login and whenever the unread message count changes. Minimail is a persistent offline-messaging feature distinct from real-time private chat.


### Receiver
The client updates the minimail unread-count badge in the UI. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: forum.moderate_message
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `286`
- **Header**: `FORUM_MODERATE_MESSAGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Moderate a forum message

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `messageId` | `int32` | required | Message identifier to moderate. |
| `action` | `int32` | required | Moderation action code. |

## Behavior

### Sender
Sent by a forum moderator to hide or delete a specific message.


### Receiver
The server applies the moderation action and sends an updated message to all viewers. Confirmed in GLADIATOR.

## Notes

- No additional notes

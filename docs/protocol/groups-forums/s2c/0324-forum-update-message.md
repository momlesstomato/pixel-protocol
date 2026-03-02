---
title: forum.update_message
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `324`
- **Header**: `GROUP_FORUM_UPDATE_MESSAGE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver an updated forum message

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `message` | `object` | required | Updated message data with the standard message structure. |

## Behavior

### Sender
Sent when a message's moderation state changes.


### Receiver
The client updates the message display to reflect moderation actions.

## Notes

- No additional notes

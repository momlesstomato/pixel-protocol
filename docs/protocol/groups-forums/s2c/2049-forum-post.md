---
title: forum.post
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2049`
- **Header**: `GROUP_FORUM_POST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a single forum message

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `message` | `object` | required | Message data with messageId, messageIndex, authorId, authorName, authorFigure, creationTimeAgo, messageText, state (byte), adminId, adminName, adminOperationTimeAgo, and authorPostCount. |

## Behavior

### Sender
Sent when a new message is posted in a thread the player is viewing.


### Receiver
The client appends the message to the thread view.

## Notes

- No additional notes

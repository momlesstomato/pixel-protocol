---
title: forum.get_messages
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `232`
- **Header**: `GET_FORUM_MESSAGES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request messages within a forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `startIndex` | `int32` | required | Starting offset for pagination. |
| `count` | `int32` | required | Number of messages to return. |

## Behavior

### Sender
Sent when the player opens a thread or pages through messages.


### Receiver
The server responds with the requested page of messages including author info and moderation state.

## Notes

- No additional notes

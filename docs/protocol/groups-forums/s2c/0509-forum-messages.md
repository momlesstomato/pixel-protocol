---
title: forum.messages
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `509`
- **Header**: `GROUP_FORUM_THREAD_MESSAGES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a page of messages within a thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `startIndex` | `int32` | required | Starting offset of this page. |
| `messages` | `list&lt;object&gt;` | required | Message entries with the standard message data structure. |

## Behavior

### Sender
Sent in response to a get-messages request.


### Receiver
The client renders the message list within the thread view.

## Notes

- No additional notes

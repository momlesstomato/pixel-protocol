---
title: forum.threads
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1073`
- **Header**: `GROUP_FORUM_THREADS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a page of forum threads

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `startIndex` | `int32` | required | Starting offset of this page. |
| `threads` | `list&lt;object&gt;` | required | Thread entries each with threadId, authorId, authorName, header, isPinned, isLocked, creationTimeAgo, totalMessages, unreadCount, lastMessageId, lastUserId, lastUserName, lastCommentTimeAgo, state (byte), adminId, adminName, and adminOperationTimeAgo. |

## Behavior

### Sender
Sent in response to a get-threads request.


### Receiver
The client renders the thread list with unread indicators and pinned threads.

## Notes

- No additional notes

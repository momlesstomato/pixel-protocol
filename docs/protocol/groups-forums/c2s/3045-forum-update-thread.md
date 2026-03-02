---
title: forum.update_thread
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3045`
- **Header**: `FORUM_UPDATE_THREAD`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update a forum thread's pinned and locked state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `isLocked` | `boolean` | required | Whether the thread should be locked. |
| `isPinned` | `boolean` | required | Whether the thread should be pinned. |

## Behavior

### Sender
Sent by a forum moderator to pin or lock a thread.


### Receiver
The server updates the thread state and broadcasts the change to all thread viewers.

## Notes

- No additional notes

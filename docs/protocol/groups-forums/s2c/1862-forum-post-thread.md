---
title: forum.post_thread
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1862`
- **Header**: `GROUP_FORUM_POST_THREAD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a newly created forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `thread` | `object` | required | Thread data with the same structure as threads in the thread list. |

## Behavior

### Sender
Sent when a new thread is created in a forum the player is viewing.


### Receiver
The client adds the new thread to the top of the thread list.

## Notes

- No additional notes

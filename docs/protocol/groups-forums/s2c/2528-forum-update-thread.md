---
title: forum.update_thread
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2528`
- **Header**: `GROUP_FORUM_UPDATE_THREAD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver an updated forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `thread` | `object` | required | Updated thread data with the standard thread structure. |

## Behavior

### Sender
Sent when a thread's pinned, locked, or moderation state changes.


### Receiver
The client updates the thread entry in the thread list.

## Notes

- No additional notes

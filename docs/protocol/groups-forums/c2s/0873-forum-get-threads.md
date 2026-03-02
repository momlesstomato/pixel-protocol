---
title: forum.get_threads
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `873`
- **Header**: `GET_FORUM_THREADS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a page of forum threads

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `startIndex` | `int32` | required | Starting offset for pagination. |
| `count` | `int32` | required | Number of threads to return. |

## Behavior

### Sender
Sent when the player views or pages through the thread list of a group forum.


### Receiver
The server responds with the requested page of threads with their metadata and unread counts.

## Notes

- No additional notes

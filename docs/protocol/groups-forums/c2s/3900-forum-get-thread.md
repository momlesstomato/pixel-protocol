---
title: forum.get_thread
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3900`
- **Header**: `GET_FORUM_THREAD`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a specific forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier to retrieve. |

## Behavior

### Sender
Sent to load a specific thread, typically from a notification link.


### Receiver
The server responds with the thread metadata.

## Notes

- No additional notes

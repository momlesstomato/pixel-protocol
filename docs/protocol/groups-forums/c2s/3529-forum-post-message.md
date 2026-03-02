---
title: forum.post_message
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3529`
- **Header**: `FORUM_POST_MESSAGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Post a message in a forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier (0 to create a new thread). |
| `subject` | `string` | required | Message subject (used for new threads). |
| `message` | `string` | required | Message body text. |

## Behavior

### Sender
Sent when the player submits a reply to an existing thread.


### Receiver
The server creates the message, adds it to the thread, and broadcasts it to all viewers. If threadId is 0, a new thread is created instead. Confirmed in GLADIATOR.

## Notes

- No additional notes

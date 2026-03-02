---
title: forum.moderate_thread
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1397`
- **Header**: `FORUM_MODERATE_THREAD`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Moderate a forum thread

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `threadId` | `int32` | required | Thread identifier. |
| `action` | `int32` | required | Moderation action code. |

## Behavior

### Sender
Sent by a forum moderator to lock, pin, hide, or delete a thread.


### Receiver
The server applies the moderation action and sends an updated thread to all viewers. Confirmed in GLADIATOR.

## Notes

- No additional notes

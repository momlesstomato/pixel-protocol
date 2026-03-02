---
title: messenger.follow_failed
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3048`
- **Header**: `MESSENGER_FOLLOW_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client that following a friend to their room failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Reason the follow failed: 1 = friend not in a room, 2 = room is inaccessible.<br/> |

## Behavior

### Sender
Sent in response to `messenger.follow_friend` (c2s 3997) when the follow cannot be completed (e.g. the friend is in a private room, has disabled following, or went offline).


### Receiver
The client displays an error message explaining why the follow failed. Confirmed in GLADIATOR (as StalkErrorComposer).

## Notes

- No additional notes

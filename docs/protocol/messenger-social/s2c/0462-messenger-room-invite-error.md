---
title: messenger.room_invite_error
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `462`
- **Header**: `MESSENGER_INVITE_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report recipients that could not be reached by a room invitation

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | General error code describing the type of failure. |
| `failedCount` | `int32` | required | Number of failed recipient user IDs that follow. |

## Behavior

### Sender
Sent in response to `messenger.room_invite` (c2s 1276) when one or more recipients could not receive the invitation.


### Receiver
The client displays the error code and lists the user IDs that were unreachable. Confirmed in GLADIATOR.

## Notes

- After `failedCount`, each entry is a single `int32` user ID that did not receive the invitation.

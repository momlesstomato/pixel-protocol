---
title: messenger.room_invite
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3870`
- **Header**: `MESSENGER_INVITE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a room invitation sent by a friend

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `senderId` | `int32` | required | User ID of the friend who sent the invitation. |
| `message` | `string` | required | Custom text the sender included with the invitation.<br/> |

## Behavior

### Sender
Pushed to each recipient when a friend sends a room invitation via `messenger.room_invite` (c2s 1276).


### Receiver
The client displays a notification with the invitation message and provides a button to enter the sender's current room. Confirmed in GLADIATOR.

## Notes

- No additional notes

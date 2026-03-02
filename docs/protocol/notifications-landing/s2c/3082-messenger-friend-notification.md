---
title: messenger.friend_notification
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3082`
- **Header**: `MESSENGER_FRIEND_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Push a friend-related state notification to the client

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `typeCode` | `int32` | required | Event type identifier: 1 = friend entered a room, 2 = friend left all rooms.<br/> |
| `avatarId` | `int32` | required | User ID of the friend who triggered the event. |
| `message` | `string` | required | Contextual text associated with the event (e.g. room name when a friend enters a room).<br/> |

## Behavior

### Sender
Pushed when a notable event involving a friend occurs, such as a friend entering or leaving a room. The `typeCode` identifies the event type and determines how the client renders the notification.


### Receiver
The client displays a toolbar notification or updates the friend list entry for `avatarId` based on `typeCode`. The `message` string carries contextual text (e.g. the room name). Confirmed in GLADIATOR (as FriendToolbarNotificationComposer).

## Notes

- No additional notes

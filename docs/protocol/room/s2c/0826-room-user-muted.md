---
title: room.user_muted
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `826`
- **Header**: `ROOM_MUTE_USER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify a user that they have been muted

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `muteTimeSeconds` | `int32` | required | Remaining mute duration in seconds. |

## Behavior

### Sender
Sent to a user who has been muted in the room. Also sent as a remaining-mute countdown notification.


### Receiver
The client shows the mute duration and blocks the chat input. Confirmed in GLADIATOR.

## Notes

- No additional notes

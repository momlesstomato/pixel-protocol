---
title: messenger.room_invite
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1276`
- **Header**: `SEND_ROOM_INVITE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a room invitation to one or more friends

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recipientCount` | `int32` | required | Number of recipient user IDs that follow. |
| `message` | `string` | required | Invitation text displayed to recipients alongside the room link.<br/> |

## Behavior

### Sender
Sent when the user invites friends to the room they are currently in. The invitation includes a text message and a list of recipient user IDs.


### Receiver
The server delivers `messenger.room_invite` (s2c 3870) to each recipient's active session. Recipients who cannot be reached are reported back via `messenger.room_invite_error` (s2c 462). Confirmed in GLADIATOR.

## Notes

- After `recipientCount`, each entry is a single `int32` user ID. The message string follows after all IDs.

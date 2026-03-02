---
title: user.home_room
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2875`
- **Header**: `USER_HOME_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the user's home room and room to enter on login

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `homeRoomId` | `int32` | required | ID of the user's configured home room; -1 if none set |
| `roomIdToEnter` | `int32` | required | ID of the room to navigate to on login; -1 if none |

## Behavior

### Sender
Sent during the post-authentication burst to inform the client of the user's configured home room and which room to navigate to automatically (if any).


### Receiver
The client stores the home room ID. If `roomIdToEnter` is non-zero the client navigates to that room automatically after the login burst completes.

## Notes

- No additional notes

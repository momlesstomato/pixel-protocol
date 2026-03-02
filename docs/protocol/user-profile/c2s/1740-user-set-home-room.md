---
title: user.set_home_room
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1740`
- **Header**: `USER_HOME_ROOM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the user's home room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room to set as home room; 0 to clear |

## Behavior

### Sender
Sent when the user designates a room as their home room from the room navigator or room settings. Passing `0` as roomId clears the current home room.


### Receiver
The server persists the home room preference. The client will be sent to this room automatically on login if configured. No response packet is sent.

## Notes

- No additional notes

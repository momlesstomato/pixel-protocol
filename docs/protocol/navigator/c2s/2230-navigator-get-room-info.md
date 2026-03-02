---
title: navigator.get_room_info
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2230`
- **Header**: `GET_GUEST_ROOM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request detailed information about a specific room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room to query. |
| `enterRoom` | `int32` | required | 1 if the client intends to enter the room after receiving the response; 0 otherwise.<br/> |
| `forwardRoom` | `int32` | required | 1 if this request originates from a room-forward flow (redirect); 0 for a direct lookup.<br/> |

## Behavior

### Sender
Sent to fetch full room metadata before entering or previewing a room. The `enterRoom` flag signals that the client intends to enter the room immediately after receiving the response. The `forwardRoom` flag signals that this request originated from a forward/redirect flow.


### Receiver
The server responds with `navigator.room_info` (s2c 687) containing the full room data record plus moderation and chat settings. Confirmed in GLADIATOR.

## Notes

- No additional notes

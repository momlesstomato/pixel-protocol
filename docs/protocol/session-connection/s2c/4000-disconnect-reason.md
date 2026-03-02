---
title: disconnect.reason
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `4000`
- **Header**: `DISCONNECT_REASON`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Inform the client why it is being disconnected

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `int32` | optional | Disconnect reason code. 0 = normal logout, 1 = banned, 2 = concurrent login, 10 = still banned, 12 = hotel closed, 13 = duplicate IP login, 17 = no login permission, 22 = invalid login ticket, 112 = idle timeout, 113 = pong timeout. See notes for full enum.<br/> |

## Behavior

### Sender
Sent by the server just before closing the connection to explain why the session is ending. The reason field maps to a well-known enum of disconnect causes. When the field is absent or zero the disconnect is a normal logout.


### Receiver
The client reads the reason code and displays an appropriate message to the user (e.g. "You were banned", "Logged in from another location", "Hotel is closing"). The client should not attempt to reconnect automatically for ban or duplicate-login reasons.

## Notes

- Common reason codes: 0 LOGOUT, 1 JUST_BANNED, 2 CONCURRENT_LOGIN, 3 CONNECTION_LOST_TO_PEER, 10 STILL_BANNED, 12 HOTEL_CLOSED, 13 DUAL_LOGIN_BY_IP, 17 NO_LOGIN_PERMISSION, 18 DUPLICATE_CONNECTION, 22 INVALID_LOGIN_TICKET, 112 IDLE_CONNECTION, 113 PONG_TIMEOUT.
- If the field is absent, clients should treat the reason as 0 (normal logout).

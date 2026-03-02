---
title: user.banned
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1683`
- **Header**: `USER_BANNED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client that the user has been banned

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | Human-readable ban reason or explanation message |

## Behavior

### Sender
Sent by the server when a moderator issues a ban against the connected user. The message string explains the reason. The server will close the connection shortly after sending this packet.


### Receiver
The client displays the ban message to the user and prepares for disconnection. No recovery action is available from the client side.

## Notes

- No additional notes

---
title: client.ping
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3928`
- **Header**: `CLIENT_PING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Keepalive ping sent by server

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this empty packet at a fixed interval (typically every 30 seconds) to verify that the client is still connected and responsive. It is also sent once in the post-authentication burst to start the keepalive cycle immediately after login.


### Receiver
The client must respond with `client.pong` (c2s 2596) as soon as possible. If the client does not reply within the server's pong timeout window (typically 60 seconds), the server will close the connection and treat the client as disconnected.

## Notes

- No additional notes

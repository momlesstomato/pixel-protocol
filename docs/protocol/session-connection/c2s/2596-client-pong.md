---
title: client.pong
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2596`
- **Header**: `CLIENT_PONG`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Keepalive response to server ping

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The client sends this empty packet in response to every `client.ping` (s2c 3928) received from the server. The Nitro client also supports a manual pong mode where pongs are sent on a fixed interval (configurable, default 20 000 ms) independent of incoming pings.


### Receiver
The server uses the arrival of this packet to reset the pong timeout timer. If no pong is received within the configured timeout (typically 60 seconds) the server assumes the client is unresponsive and closes the connection. The packet body is ignored; only its arrival matters.

## Notes

- No additional notes

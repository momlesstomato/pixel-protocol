---
title: session.restore_client
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `426`
- **Header**: `RESTORE_CLIENT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Restore client

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about restore client.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

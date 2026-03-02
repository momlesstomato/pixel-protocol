---
title: session.motd_messages
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2035`
- **Header**: `MOTD_MESSAGES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Motd messages

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about motd messages.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

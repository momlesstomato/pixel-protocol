---
title: games.poll_error
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `662`
- **Header**: `POLL_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Poll error

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about poll error state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

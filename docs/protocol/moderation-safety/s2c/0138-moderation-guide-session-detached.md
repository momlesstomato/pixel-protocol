---
title: moderation.guide_session_detached
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `138`
- **Header**: `GUIDE_SESSION_DETACHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session detached

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about guide session detached state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

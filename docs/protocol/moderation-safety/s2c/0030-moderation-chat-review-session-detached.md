---
title: moderation.chat_review_session_detached
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `30`
- **Header**: `CHAT_REVIEW_SESSION_DETACHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Chat review session detached

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about chat review session detached state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

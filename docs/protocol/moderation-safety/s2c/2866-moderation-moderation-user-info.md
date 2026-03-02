---
title: moderation.moderation_user_info
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2866`
- **Header**: `MODERATION_USER_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Moderation user info

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about moderation user info state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: moderation.user_sanction_status
sidebar_position: 49
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3679`
- **Header**: `USER_SANCTION_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: User sanction status

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about user sanction status state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

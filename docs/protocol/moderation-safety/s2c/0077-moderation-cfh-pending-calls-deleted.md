---
title: moderation.cfh_pending_calls_deleted
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `77`
- **Header**: `CFH_PENDING_CALLS_DELETED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh pending calls deleted

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh pending calls deleted state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

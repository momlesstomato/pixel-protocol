---
title: moderation.cfh_pending_calls
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1121`
- **Header**: `CFH_PENDING_CALLS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh pending calls

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh pending calls state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

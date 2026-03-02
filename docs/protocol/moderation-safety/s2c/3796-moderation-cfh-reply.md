---
title: moderation.cfh_reply
sidebar_position: 50
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3796`
- **Header**: `CFH_REPLY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh reply

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh reply state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

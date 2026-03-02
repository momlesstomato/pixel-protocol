---
title: moderation.cfh_chatlog
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `607`
- **Header**: `CFH_CHATLOG`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh chatlog

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh chatlog state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

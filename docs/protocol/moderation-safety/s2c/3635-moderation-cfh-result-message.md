---
title: moderation.cfh_result_message
sidebar_position: 48
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3635`
- **Header**: `CFH_RESULT_MESSAGE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh result message

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh result message state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

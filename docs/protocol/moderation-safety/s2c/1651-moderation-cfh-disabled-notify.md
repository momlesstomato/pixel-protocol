---
title: moderation.cfh_disabled_notify
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1651`
- **Header**: `MODERATION_REPORT_DISABLED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh disabled notify

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about cfh disabled notify state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

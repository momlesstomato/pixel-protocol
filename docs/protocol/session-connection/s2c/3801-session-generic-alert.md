---
title: session.generic_alert
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3801`
- **Header**: `GENERIC_ALERT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Generic alert

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about generic alert.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

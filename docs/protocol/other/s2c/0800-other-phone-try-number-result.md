---
title: other.phone_try_number_result
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `800`
- **Header**: `PHONE_TRY_NUMBER_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Other
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Phone try number result

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about phone try number result state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

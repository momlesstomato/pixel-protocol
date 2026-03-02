---
title: other.phone_try_verification_code_result
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `91`
- **Header**: `PHONE_TRY_VERIFICATION_CODE_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Other
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Phone try verification code result

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about phone try verification code result state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: handshake.init_diffie
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3110`
- **Header**: `HANDSHAKE_INIT_DIFFIE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `crypto`
- **Since**: `nitro-1.6.6`
- **Summary**: Request signed Diffie-Hellman parameters from server

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The client sends this empty packet to request the Diffie-Hellman prime and generator values from the server. It is the first step of the optional encryption handshake and must be sent before `handshake.complete_diffie`. Some Nitro builds skip this step entirely and authenticate without encryption.


### Receiver
The server verifies that an encryption module is initialized for this session. If encryption is not available the server disconnects the client. Otherwise it responds with the server-bound `handshake.init_diffie` (s2c 1347) containing the RSA-signed prime and generator.

## Notes

- No additional notes

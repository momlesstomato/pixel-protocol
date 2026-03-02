---
title: handshake.complete_diffie
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `773`
- **Header**: `HANDSHAKE_COMPLETE_DIFFIE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `crypto`
- **Since**: `nitro-1.6.6`
- **Summary**: Send client public key and complete key exchange

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encryptedPublicKey` | `string` | required | RSA-encrypted client-side Diffie-Hellman public key |

## Behavior

### Sender
After receiving the signed prime and generator (s2c 1347), the client decrypts them with the known RSA public key, generates its own Diffie-Hellman key pair, and sends its public key to the server. This is the second and final step of the encryption handshake.


### Receiver
The server decrypts the client public key with RSA and computes the shared secret (`clientPublic ^ serverPrivate mod prime`). It then responds with `handshake.complete_diffie` (s2c 3885) containing its own public key, and installs RC4 encryption on both the inbound and outbound channels. All subsequent traffic is encrypted. The server sets a `handshakeFinished` flag on the session; if a later `security.sso_ticket` arrives and this flag is false while encryption is enforced, the server disconnects the client.

## Notes

- No additional notes

---
title: handshake.complete_diffie
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3885`
- **Header**: `HANDSHAKE_COMPLETE_DIFFIE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Handshake & Security
- **Phase**: `crypto`
- **Since**: `nitro-1.6.6`
- **Summary**: Return server public key and optional encryption flag

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encryptedPublicKey` | `string` | required | RSA-encrypted server-side Diffie-Hellman public key |
| `serverClientEncryption` | `boolean` | optional | Optional flag: true enables server-to-client encryption |

## Behavior

### Sender
Sent after the server has processed the client public key from `handshake.complete_diffie` (c2s 773) and derived the shared secret. The server provides its own public key and optionally signals whether server-to-client encryption is enabled. After sending this packet the server installs RC4 encryption on both directions.


### Receiver
The client decrypts the server public key using RSA, computes the same shared secret, and installs RC4 encryption on its end. From this point all traffic in both directions is RC4-encrypted. If the optional `serverClientEncryption` flag is present and false, the client may skip encrypting its outbound traffic (implementation dependent).

## Notes

- No additional notes

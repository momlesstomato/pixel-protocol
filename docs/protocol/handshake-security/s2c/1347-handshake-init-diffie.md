---
title: handshake.init_diffie
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1347`
- **Header**: `HANDSHAKE_INIT_DIFFIE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Handshake & Security
- **Phase**: `crypto`
- **Since**: `nitro-1.6.6`
- **Summary**: Provide signed prime and generator for Diffie-Hellman

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encryptedPrime` | `string` | required | RSA-signed Diffie-Hellman prime value |
| `encryptedGenerator` | `string` | required | RSA-signed Diffie-Hellman generator value |

## Behavior

### Sender
The server sends this in response to a `handshake.init_diffie` (c2s 3110) request. It provides the Diffie-Hellman prime and generator, both RSA-signed so the client can verify their authenticity. The DH parameters may be generated per-session or shared across all sessions, depending on the implementation.


### Receiver
The client verifies the RSA signature using the known server public key, extracts the prime and generator, generates its own DH key pair, and proceeds to send `handshake.complete_diffie` (c2s 773) with its public key.

## Notes

- No additional notes

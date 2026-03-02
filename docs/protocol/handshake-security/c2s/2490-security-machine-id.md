---
title: security.machine_id
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2490`
- **Header**: `SECURITY_MACHINE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `pre-auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Send machine and fingerprint identifiers

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `machineId` | `string` | required | Stable 64-character hex machine identifier |
| `fingerprint` | `string` | required | Client fingerprint hash |
| `capabilities` | `string` | required | Capability or version signature string |

## Behavior

### Sender
The client sends a stable machine identifier, a browser fingerprint hash, and a capabilities string. The machine ID is typically a 64-character hex string persisted in local storage. This packet can be sent before or after authentication, depending on the client build.


### Receiver
The server reads the three strings and stores the machine ID on the session. If the machine ID is malformed (e.g. starts with `~` or is not exactly 64 characters) the server generates a new random 64-character hex ID and echoes it back via `security.machine_id` (s2c 1488). The server also checks the machine ID against a machine-ban list and disconnects the client if banned. The fingerprint and capabilities strings are read but typically discarded.

## Notes

- No additional notes

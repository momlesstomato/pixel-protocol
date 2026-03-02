---
title: handshake.identity_accounts
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3523`
- **Header**: `HANDSHAKE_IDENTITY_ACCOUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Handshake & Security
- **Phase**: `auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Provide linked account identities associated with the session

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of identity entries that follow |

## Behavior

### Sender
Sent by the server during or after the authentication phase to inform the client of all account identities linked to the current session. Each entry contains a numeric account ID and a display name. This supports multi-account or identity-linked environments.


### Receiver
The client stores the list of identity accounts for later use (e.g. account switching UI). If the list is empty, the client may treat the session as a single-identity session.

## Notes

- After `count`, each entry is serialized as: `int32` accountId, `string` accountName.
- This uses an inline repeated structure rather than a prefixed `list<T>`.

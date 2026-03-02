---
title: handshake.client_variables
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1053`
- **Header**: `CLIENT_VARIABLES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `pre-auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Send client resource metadata required by some server revisions

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `int32` | required | Numeric client id, often 0 |
| `clientUrl` | `string` | required | Main Nitro client URL |
| `externalVariablesUrl` | `string` | required | External variables URL |

## Behavior

### Sender
Sent during the pre-authentication phase. The client provides its numeric client ID (usually `0`), the main client URL, and the external variables URL. These allow the server to verify that the connecting client points at the intended backend resources.


### Receiver
The server reads the three fields. Most implementations discard the values without validation. No response packet is sent.

## Notes

- No additional notes

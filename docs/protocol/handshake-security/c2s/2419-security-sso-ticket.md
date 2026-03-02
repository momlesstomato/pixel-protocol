---
title: security.sso_ticket
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2419`
- **Header**: `SECURITY_TICKET`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Authenticate using the SSO ticket

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ticket` | `string` | required | SSO token issued by auth service |
| `timestamp` | `int32` | optional | Optional client-side timestamp (ticker time) |

## Behavior

### Sender
The client sends the single-sign-on token obtained from an external authentication service, along with an optional client-side timestamp. This packet is sent after the release version and optionally after the Diffie-Hellman handshake. It is the primary authentication mechanism.


### Receiver
The server strips whitespace from the ticket, validates that it is non-empty, and looks it up in the user database. If the ticket is invalid, not found, or associated with a banned account, the server disconnects the client. On success the server invalidates the ticket (making it single-use), loads the user session, and sends a burst of post-authentication packets beginning with `authentication.ok` (s2c 2491) followed by `availability.status` (s2c 2033) and the first `client.ping` (s2c 3928) to start the keepalive cycle. If encryption is enforced and the Diffie-Hellman handshake was not completed, the server rejects the login.

## Notes

- No additional notes

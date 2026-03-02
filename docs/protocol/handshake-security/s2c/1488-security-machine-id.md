---
title: security.machine_id
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1488`
- **Header**: `SECURITY_MACHINE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Handshake & Security
- **Phase**: `auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Send normalized machine id back to client for storage

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `machineId` | `string` | required | Server-approved 64-character hex machine identifier |

## Behavior

### Sender
Sent by the server when the machine ID received in `security.machine_id` (c2s 2490) is malformed or missing. The server generates a valid 64-character hex identifier and returns it to the client. The server may also echo the original ID back unchanged.


### Receiver
The client stores the received machine ID in local persistent storage (e.g. localStorage or a cookie). This ID will be included in future `security.machine_id` (c2s 2490) packets to maintain device identity across sessions.

## Notes

- No additional notes

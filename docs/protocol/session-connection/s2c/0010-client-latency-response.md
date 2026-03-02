---
title: client.latency_response
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `10`
- **Header**: `CLIENT_LATENCY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Echo request id in response to latency test

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | `int32` | required | Mirrors the requestId from the c2s latency test |

## Behavior

### Sender
Sent by the server immediately after receiving a `client.latency_test` (c2s 295). The server echoes back the same request ID without modification.


### Receiver
The client matches the returned request ID to the original probe, computes the elapsed time since sending, and uses the result as a round-trip time measurement. This value may be displayed in the UI or used for adaptive network adjustments.

## Notes

- No additional notes

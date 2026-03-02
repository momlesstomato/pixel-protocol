---
title: client.latency_test
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `295`
- **Header**: `CLIENT_LATENCY`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send latency probe id to measure round-trip time

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | `int32` | required | Client-generated probe identifier |

## Behavior

### Sender
The client generates an integer request ID and sends it to the server to initiate a round-trip latency measurement. The client records the send timestamp locally and computes RTT when the echo arrives.


### Receiver
The server reads the integer request ID and immediately echoes it back in a `client.latency_response` (s2c 10) packet. No validation or state change is involved.

## Notes

- No additional notes

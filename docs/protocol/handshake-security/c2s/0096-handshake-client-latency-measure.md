---
title: handshake.client_latency_measure
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `96`
- **Header**: `CLIENT_LATENCY_MEASURE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Client latency measure

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The client sends this message to client latency measure.


### Receiver
The server processes the client latency measure request and responds appropriately.

## Notes

- No additional notes

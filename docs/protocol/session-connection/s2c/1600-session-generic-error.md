---
title: session.generic_error
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1600`
- **Header**: `GENERIC_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Generic error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about generic error.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

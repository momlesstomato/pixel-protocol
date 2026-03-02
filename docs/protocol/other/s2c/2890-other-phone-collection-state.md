---
title: other.phone_collection_state
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2890`
- **Header**: `PHONE_COLLECTION_STATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Other
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Phone collection state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about phone collection state state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

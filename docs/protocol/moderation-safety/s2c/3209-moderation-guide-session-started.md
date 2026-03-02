---
title: moderation.guide_session_started
sidebar_position: 41
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3209`
- **Header**: `GUIDE_SESSION_STARTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session started

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide session started state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

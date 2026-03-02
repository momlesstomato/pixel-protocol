---
title: moderation.issue_pick_failed
sidebar_position: 39
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3150`
- **Header**: `ISSUE_PICK_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Issue pick failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `boolean` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about issue pick failed state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

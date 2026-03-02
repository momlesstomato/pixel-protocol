---
title: moderation.guide_reporting_status
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3463`
- **Header**: `GUIDE_REPORTING_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide reporting status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `boolean` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field8` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide reporting status state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: moderation.issue_info
sidebar_position: 47
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3609`
- **Header**: `ISSUE_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Issue info

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field8` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field9` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field10` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field11` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field12` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field13` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field14` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field15` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field16` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about issue info state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

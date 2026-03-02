---
title: quests.question
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2665`
- **Header**: `QUESTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Question

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field8` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field9` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field10` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field11` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field12` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about question state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

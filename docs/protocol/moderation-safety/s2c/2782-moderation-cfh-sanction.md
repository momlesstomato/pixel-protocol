---
title: moderation.cfh_sanction
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2782`
- **Header**: `CFH_SANCTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cfh sanction

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about cfh sanction state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

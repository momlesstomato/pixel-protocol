---
title: games.loadgame
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3654`
- **Header**: `LOADGAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Loadgame

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field8` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field9` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field10` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field11` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about loadgame state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

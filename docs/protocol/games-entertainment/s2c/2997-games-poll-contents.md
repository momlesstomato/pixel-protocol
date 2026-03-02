---
title: games.poll_contents
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2997`
- **Header**: `POLL_CONTENTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Poll contents

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `boolean` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field8` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field9` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field10` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field11` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field12` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field13` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field14` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field15` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field16` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about poll contents state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: furniture.trax_song_info
sidebar_position: 52
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3365`
- **Header**: `TRAX_SONG_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Trax song info

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |
| `field4` | `string` | required | Field extracted from parser source. |
| `field5` | `string` | required | Field extracted from parser source. |
| `field6` | `int32` | required | Field extracted from parser source. |
| `field7` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about trax song info.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

---
title: furniture.mystery_box_keys
sidebar_position: 49
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2833`
- **Header**: `MYSTERY_BOX_KEYS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mystery box keys

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |
| `field2` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about mystery box keys.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

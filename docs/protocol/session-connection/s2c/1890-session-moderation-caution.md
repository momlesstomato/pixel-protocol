---
title: session.moderation_caution
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1890`
- **Header**: `MODERATION_CAUTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Moderation caution

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |
| `field2` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about moderation caution.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

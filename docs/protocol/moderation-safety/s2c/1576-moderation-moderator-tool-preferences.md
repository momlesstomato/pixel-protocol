---
title: moderation.moderator_tool_preferences
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1576`
- **Header**: `MODERATOR_TOOL_PREFERENCES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Moderator tool preferences

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about moderator tool preferences state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

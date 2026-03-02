---
title: moderation.guide_session_invited_to_guide_room
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `219`
- **Header**: `GUIDE_SESSION_INVITED_TO_GUIDE_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session invited to guide room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide session invited to guide room state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: moderation.guide_session_ended
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1456`
- **Header**: `GUIDE_SESSION_ENDED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session ended

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide session ended state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

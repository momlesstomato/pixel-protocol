---
title: moderation.guide_ticket_resolution
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2674`
- **Header**: `GUIDE_TICKET_RESOLUTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide ticket resolution

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide ticket resolution state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

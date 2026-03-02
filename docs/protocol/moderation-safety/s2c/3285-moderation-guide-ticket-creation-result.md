---
title: moderation.guide_ticket_creation_result
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3285`
- **Header**: `GUIDE_TICKET_CREATION_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide ticket creation result

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide ticket creation result state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: moderation.guide_session_partner_is_typing
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1016`
- **Header**: `GUIDE_SESSION_PARTNER_IS_TYPING`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session partner is typing

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide session partner is typing state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

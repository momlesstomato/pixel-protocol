---
title: games.poll_offer
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3785`
- **Header**: `POLL_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Poll offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about poll offer state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: room_entities.hold_sign
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1975`
- **Header**: `UNIT_SIGN`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Hold up a sign with a number or symbol

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signId` | `int32` | required | Sign identifier (0-18 for numbers/symbols). |

## Behavior

### Sender
Sent when the user selects a sign to display above their avatar.


### Receiver
The server broadcasts the sign via `room_entities.expression` (s2c 1631). Confirmed in GLADIATOR.

## Notes

- No additional notes

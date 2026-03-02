---
title: room_entities.expression
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1631`
- **Header**: `UNIT_EXPRESSION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a unit performed an expression or gesture

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `expressionId` | `int32` | required | Expression type identifier. |

## Behavior

### Sender
Sent when a unit performs an expression (e.g. wave, blow kiss, laugh) or holds up a sign.


### Receiver
The client plays the expression animation on the unit. Confirmed in GLADIATOR.

## Notes

- No additional notes

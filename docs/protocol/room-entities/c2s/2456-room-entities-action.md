---
title: room_entities.action
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2456`
- **Header**: `UNIT_ACTION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Perform an avatar action or expression

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionId` | `int32` | required | Action identifier (e.g. 1=wave, 2=blowkiss, 3=laugh, 5=idle, 6=sleep, 7=sit). |

## Behavior

### Sender
Sent when the user triggers an avatar action such as wave, blow a kiss, or laugh.


### Receiver
The server broadcasts the expression via `room_entities.expression` (s2c 1631). Confirmed in GLADIATOR.

## Notes

- No additional notes

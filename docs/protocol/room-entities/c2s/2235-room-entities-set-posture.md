---
title: room_entities.set_posture
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2235`
- **Header**: `UNIT_POSTURE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the avatar's posture (sit or stand)

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `posture` | `int32` | required | Posture code: 1=sit, 2=stand. |

## Behavior

### Sender
Sent when the user toggles between sitting and standing.


### Receiver
The server updates the avatar posture. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: room.score
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `482`
- **Header**: `ROOM_SCORE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room's current score

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `score` | `int32` | required | The room's current score (total likes). |

## Behavior

### Sender
Sent during room loading with the room's aggregate score (number of likes).


### Receiver
The client displays the score in the room info panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

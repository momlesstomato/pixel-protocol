---
title: room_entities.dance
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2080`
- **Header**: `UNIT_DANCE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the avatar's dance animation

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `danceId` | `int32` | required | Dance animation identifier (0 = stop dancing). |

## Behavior

### Sender
Sent when the user selects a dance move. A value of 0 stops dancing.


### Receiver
The server broadcasts the dance state via `room_entities.dance` (s2c 2233). Confirmed in GLADIATOR.

## Notes

- No additional notes

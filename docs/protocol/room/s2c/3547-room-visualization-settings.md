---
title: room.visualization_settings
sidebar_position: 51
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3547`
- **Header**: `ROOM_THICKNESS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver room visualization settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hideWalls` | `boolean` | required | Whether walls are hidden. |
| `wallThickness` | `int32` | required | Wall thickness: -2 to 1. |
| `floorThickness` | `int32` | required | Floor thickness: -2 to 1. |

## Behavior

### Sender
Sent during room loading to specify wall visibility and thickness settings for rendering.


### Receiver
The client adjusts rendering parameters accordingly. Confirmed in GLADIATOR.

## Notes

- No additional notes

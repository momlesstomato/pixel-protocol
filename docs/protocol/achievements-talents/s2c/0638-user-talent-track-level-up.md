---
title: user.talent_track_level_up
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `638`
- **Header**: `TALENT_TRACK_LEVEL_UP`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Talent track level up

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about talent track level up.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

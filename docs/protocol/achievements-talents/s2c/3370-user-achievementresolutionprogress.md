---
title: user.achievementresolutionprogress
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3370`
- **Header**: `ACHIEVEMENTRESOLUTIONPROGRESS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Achievementresolutionprogress

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |
| `field4` | `int32` | required | Field extracted from parser source. |
| `field5` | `int32` | required | Field extracted from parser source. |
| `field6` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about achievementresolutionprogress.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

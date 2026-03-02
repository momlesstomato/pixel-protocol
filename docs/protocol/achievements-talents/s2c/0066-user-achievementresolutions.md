---
title: user.achievementresolutions
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `66`
- **Header**: `ACHIEVEMENTRESOLUTIONS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Achievementresolutions

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about achievementresolutions.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

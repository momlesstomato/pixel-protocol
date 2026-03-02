---
title: user.achievementresolutioncompleted
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `740`
- **Header**: `ACHIEVEMENTRESOLUTIONCOMPLETED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Achievementresolutioncompleted

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |
| `field2` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about achievementresolutioncompleted.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

---
title: economy.community_goal_earned_prizes
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3319`
- **Header**: `COMMUNITY_GOAL_EARNED_PRIZES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Community goal earned prizes

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about community goal earned prizes.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

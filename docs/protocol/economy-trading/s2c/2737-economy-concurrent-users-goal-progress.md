---
title: economy.concurrent_users_goal_progress
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2737`
- **Header**: `CONCURRENT_USERS_GOAL_PROGRESS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Concurrent users goal progress

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about concurrent users goal progress.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

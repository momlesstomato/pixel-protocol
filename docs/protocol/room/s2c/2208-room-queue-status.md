---
title: room.queue_status
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2208`
- **Header**: `ROOM_QUEUE_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the doorbell queue status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `queueId` | `int32` | required | Queue slot identifier. |
| `position` | `int32` | required | User's current position in the queue (0-based). |

## Behavior

### Sender
Sent to users waiting in a room's doorbell queue to show their current position.


### Receiver
The client displays the queue position to the waiting user. Confirmed in GLADIATOR.

## Notes

- No additional notes

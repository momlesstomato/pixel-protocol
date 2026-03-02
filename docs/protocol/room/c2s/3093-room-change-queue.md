---
title: room.change_queue
sidebar_position: 42
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3093`
- **Header**: `CHANGE_QUEUE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Change the user's position in the room queue

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newQueueId` | `int32` | required | Target queue slot identifier. |

## Behavior

### Sender
Sent when the user changes their position in the doorbell queue (e.g. moving between queue slots).


### Receiver
The server updates the queue state and broadcasts the change. Confirmed in GLADIATOR.

## Notes

- No additional notes

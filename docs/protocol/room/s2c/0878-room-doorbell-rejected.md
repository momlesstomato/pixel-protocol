---
title: room.doorbell_rejected
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `878`
- **Header**: `ROOM_DOORBELL_REJECTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the visitor that doorbell access was denied

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Username of the rejected user (may be empty string). |

## Behavior

### Sender
Sent to the visitor after the room owner rejects their doorbell request.


### Receiver
The client shows a rejection message and returns the user to the navigator. Confirmed in GLADIATOR.

## Notes

- No additional notes

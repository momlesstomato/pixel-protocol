---
title: room.doorbell_accepted
sidebar_position: 52
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3783`
- **Header**: `ROOM_DOORBELL_ACCEPTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the visitor that doorbell access was granted

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Username of the accepted user (may be empty string). |

## Behavior

### Sender
Sent to the visitor after the room owner accepts their doorbell request.


### Receiver
The client proceeds with the room entry flow. Confirmed in GLADIATOR.

## Notes

- No additional notes

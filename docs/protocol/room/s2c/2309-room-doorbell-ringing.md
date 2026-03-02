---
title: room.doorbell_ringing
sidebar_position: 39
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2309`
- **Header**: `ROOM_DOORBELL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the room owner that someone is at the door

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Username of the user ringing the doorbell. |

## Behavior

### Sender
Sent to the room owner when a user rings the doorbell of the locked room.


### Receiver
The client shows the doorbell notification to the room owner with the visitor's name. Confirmed in GLADIATOR.

## Notes

- No additional notes

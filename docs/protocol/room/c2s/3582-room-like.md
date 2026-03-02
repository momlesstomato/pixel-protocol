---
title: room.like
sidebar_position: 50
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3582`
- **Header**: `ROOM_LIKE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Like the current room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room being liked. |

## Behavior

### Sender
Sent when the user clicks the like/rate button for the current room.


### Receiver
The server increments the room score. Confirmed in GLADIATOR.

## Notes

- No additional notes

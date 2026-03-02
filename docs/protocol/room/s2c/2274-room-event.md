---
title: room.event
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2274`
- **Header**: `ROOM_PROMOTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver room event or promotion data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventId` | `int32` | required | Room event identifier. |
| `eventName` | `string` | required | Event display name. |
| `eventDescription` | `string` | required | Event description text. |
| `minutesLeft` | `int32` | required | Minutes remaining until the event expires. |

## Behavior

### Sender
Sent when a room has an active promotion/event to display in the room info panel.


### Receiver
The client shows the event name and description in the room header. Confirmed in GLADIATOR.

## Notes

- No additional notes

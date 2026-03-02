---
title: room.event_cancelled
sidebar_position: 50
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3479`
- **Header**: `ROOM_EVENT_CANCEL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the active room event was cancelled

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the room owner cancels or the server removes the active room event.


### Receiver
The client removes the event indicator from the room header. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: room.info_updated
sidebar_position: 48
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3297`
- **Header**: `ROOM_INFO_UPDATED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that room metadata has been updated

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the updated room. |

## Behavior

### Sender
Sent to all room occupants when the room owner changes the room's name, description, or other public metadata.


### Receiver
The client refreshes the room info display. Confirmed in GLADIATOR.

## Notes

- No additional notes

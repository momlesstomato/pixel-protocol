---
title: room.set_object_data
sidebar_position: 51
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3608`
- **Header**: `SET_OBJECT_DATA`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set extra data on a room object

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objectId` | `int32` | required | Room object ID. |
| `data` | `string` | required | New extra data value. |

## Behavior

### Sender
Sent to update the extra data string on a floor or wall object in the room.


### Receiver
The server updates the object data. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: navigator.favourite_remove
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `309`
- **Header**: `ROOM_FAVORITE_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a room from the user's favourites list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room to remove from favourites. |

## Behavior

### Sender
Sent when the user un-favourites a room.


### Receiver
The server removes the room from the stored list and responds with `navigator.favourite_changed` (s2c 2524) with `added = false`. Confirmed in GLADIATOR.

## Notes

- No additional notes

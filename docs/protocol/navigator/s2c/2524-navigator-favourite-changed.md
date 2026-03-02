---
title: navigator.favourite_changed
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2524`
- **Header**: `USER_FAVORITE_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client that a room was added to or removed from favourites

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room that was added or removed. |
| `added` | `boolean` | required | True when the room was added; false when removed. |

## Behavior

### Sender
Sent in response to `navigator.favourite_add` (c2s 3817) or `navigator.favourite_remove` (c2s 309) to confirm the change.


### Receiver
The client updates its local favourites list: adds the room when `added` is true, removes it when false. Confirmed in GLADIATOR (as FavoriteRoomChangedComposer).

## Notes

- No additional notes

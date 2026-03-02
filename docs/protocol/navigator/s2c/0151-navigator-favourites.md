---
title: navigator.favourites
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `151`
- **Header**: `USER_FAVORITE_ROOM_COUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the user's full favourites list with capacity limit

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit` | `int32` | required | Maximum number of rooms the user is allowed to favourite. |
| `roomCount` | `int32` | required | Number of room IDs that follow. |

## Behavior

### Sender
Sent on login to restore the user's favourite room list. Contains the maximum allowed number of favourites and the IDs of all currently favourited rooms.


### Receiver
The client initializes its local favourites store from this packet. Confirmed in GLADIATOR (as FavoriteRoomsCountComposer).

## Notes

- After `roomCount`, each entry is a single `int32` room ID.

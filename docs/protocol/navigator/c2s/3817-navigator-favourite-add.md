---
title: navigator.favourite_add
sidebar_position: 46
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3817`
- **Header**: `ROOM_FAVORITE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a room to the user's favourites list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room to add to favourites. |

## Behavior

### Sender
Sent when the user marks a room as a favourite. The server adds it to the stored list and sends back confirmation.


### Receiver
The server records the favourite and responds with `navigator.favourite_changed` (s2c 2524) with `added = true`. The updated count is reflected in `navigator.favourites` (s2c 151). Confirmed in GLADIATOR.

## Notes

- No additional notes

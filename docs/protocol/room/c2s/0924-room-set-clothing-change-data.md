---
title: room.set_clothing_change_data
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `924`
- **Header**: `SET_CLOTHING_CHANGE_DATA`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set clothing change data for an avatar figure object

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the clothing-change furniture. |
| `gender` | `string` | required | Gender character: `M` or `F`. |
| `figure` | `string` | required | Figure string to apply to the object. |

## Behavior

### Sender
Sent when the user interacts with a clothing-change furniture item (e.g. a dressing room) to apply a new figure string.


### Receiver
The server applies the figure change to the relevant object. Confirmed in GLADIATOR.

## Notes

- No additional notes

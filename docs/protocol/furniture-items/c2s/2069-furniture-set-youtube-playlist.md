---
title: furniture.set_youtube_playlist
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2069`
- **Header**: `SET_YOUTUBE_DISPLAY_PLAYLIST`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the active YouTube playlist

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display. |
| `playlistId` | `string` | required | YouTube playlist identifier. |

## Behavior

### Sender
Sent when the user selects a playlist from the YouTube display playlist selector.


### Receiver
The server updates the active playlist on the furniture. Confirmed in GLADIATOR.

## Notes

- No additional notes

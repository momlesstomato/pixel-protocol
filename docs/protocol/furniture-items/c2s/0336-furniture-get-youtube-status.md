---
title: furniture.get_youtube_status
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `336`
- **Header**: `GET_YOUTUBE_DISPLAY_STATUS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the current YouTube display status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display furniture. |

## Behavior

### Sender
Sent when the user opens the YouTube display furniture control panel.


### Receiver
The server responds with `furniture.youtube_video` (s2c 1411) and `furniture.youtube_playlists` (s2c 1112). Confirmed in GLADIATOR.

## Notes

- No additional notes

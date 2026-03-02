---
title: furniture.youtube_playlists
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1112`
- **Header**: `YOUTUBE_DISPLAY_PLAYLISTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the available YouTube playlists

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display. |
| `playlistCount` | `int32` | required | Number of playlist records. |
| `playlists` | `object[]` | required | Array of playlist records. Each contains: `playlistId` (string), `displayName` (string), `coverUrl` (string).<br/> |

## Behavior

### Sender
Sent in response to `furniture.get_youtube_status` (c2s 336) with the available playlists for the display furniture.


### Receiver
The client populates the playlist selector in the YouTube control panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

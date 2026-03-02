---
title: furniture.youtube_video
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1411`
- **Header**: `YOUTUBE_DISPLAY_VIDEO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the currently playing YouTube video info

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display. |
| `videoId` | `string` | required | YouTube video identifier. |
| `startAtSeconds` | `int32` | required | Current playback position in seconds. |
| `state` | `int32` | required | Current state: 1=playing, 2=paused. |

## Behavior

### Sender
Sent in response to `furniture.get_youtube_status` (c2s 336) with the current video identifier and position.


### Receiver
The client loads the specified video and seeks to the given position. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.control_youtube
sidebar_position: 48
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3005`
- **Header**: `CONTROL_YOUTUBE_DISPLAY_PLAYBACK`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Control YouTube display playback

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display. |
| `action` | `int32` | required | Playback action: 1=play, 2=pause, 3=stop. |

## Behavior

### Sender
Sent when the user sends playback control commands (play, pause, stop) to a YouTube display furniture item.


### Receiver
The server forwards the control command to all room occupants via `furniture.youtube_control` (s2c 1554). Confirmed in GLADIATOR.

## Notes

- No additional notes

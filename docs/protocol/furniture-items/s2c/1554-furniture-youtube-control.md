---
title: furniture.youtube_control
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1554`
- **Header**: `YOUTUBE_CONTROL_VIDEO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Relay a YouTube playback control command

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the YouTube display. |
| `videoId` | `string` | required | YouTube video identifier. |
| `startAtSeconds` | `int32` | required | Start position in seconds. |
| `state` | `int32` | required | Playback state: 1=play, 2=pause, 3=stop. |

## Behavior

### Sender
Sent to all room occupants when a user issues a playback control command to the YouTube display furniture.


### Receiver
The client forwards the command to the embedded YouTube player. Confirmed in GLADIATOR.

## Notes

- No additional notes

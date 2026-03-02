---
title: furniture.playlist_song_added
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1140`
- **Header**: `PLAYLIST_SONG_ADDED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Playlist song added

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |
| `field4` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about playlist song added.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

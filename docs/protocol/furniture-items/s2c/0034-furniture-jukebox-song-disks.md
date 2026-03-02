---
title: furniture.jukebox_song_disks
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `34`
- **Header**: `JUKEBOX_SONG_DISKS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Jukebox song disks

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |
| `field4` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about jukebox song disks.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

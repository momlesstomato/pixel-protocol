---
title: room.chat_settings
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1191`
- **Header**: `ROOM_SETTINGS_CHAT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room chat configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bubbleMode` | `int32` | required | Chat bubble display mode. |
| `bubbleWeight` | `int32` | required | Chat bubble text-width setting. |
| `bubbleSpeed` | `int32` | required | Chat bubble display speed. |
| `chatDistance` | `int32` | required | Visible chat distance in tiles. |
| `floodProtection` | `int32` | required | Flood protection level: 0=loose, 1=normal, 2=strict. |

## Behavior

### Sender
Sent during room loading to inform the client of the room's chat-related settings.


### Receiver
The client configures chat bubble behavior according to these settings. Confirmed in GLADIATOR.

## Notes

- No additional notes

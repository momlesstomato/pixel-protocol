---
title: room.settings_saved
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `948`
- **Header**: `ROOM_SETTINGS_SAVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that room settings were saved successfully

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | ID of the room whose settings were saved. |

## Behavior

### Sender
Sent in response to `room.save_settings` (c2s 1969) when the server successfully persists the new settings.


### Receiver
The client closes the settings editor and refreshes the room. Confirmed in GLADIATOR.

## Notes

- No additional notes

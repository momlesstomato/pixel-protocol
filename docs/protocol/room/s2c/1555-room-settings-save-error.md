---
title: room.settings_save_error
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1555`
- **Header**: `ROOM_SETTINGS_SAVE_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that room settings could not be saved

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Error code: 1=invalid_name, 2=name_too_short, 3=name_too_long, 4=invalid_description, 5=invalid_password.<br/> |

## Behavior

### Sender
Sent when the server rejects a `room.save_settings` (c2s 1969) request due to validation failure.


### Receiver
The client displays the error to the user in the settings form. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: user.settings_volume
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1367`
- **Header**: `USER_SETTINGS_VOLUME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save audio volume preferences

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `volumeSystem` | `int32` | required | System sound volume (0–100) |
| `volumeFurni` | `int32` | required | Furni sound volume (0–100) |
| `volumeTrax` | `int32` | required | Music (Trax) volume (0–100) |

## Behavior

### Sender
Sent when the user changes audio volume levels in the settings panel. All three volume values are sent together even if only one changed.


### Receiver
The server persists the three volume values and updates the session settings. No response packet is sent.

## Notes

- No additional notes

---
title: user.settings_camera
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1461`
- **Header**: `USER_SETTINGS_CAMERA`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle camera-follow-avatar mode

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cameraFollow` | `boolean` | required | true = camera follows avatar; false = free camera |

## Behavior

### Sender
Sent when the user enables or disables the camera-follow feature, which keeps the viewport centered on their avatar while walking.


### Receiver
The server persists the preference. No response packet is sent.

## Notes

- No additional notes

---
title: user.settings
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `513`
- **Header**: `USER_SETTINGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the authenticated user's persisted client settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `volumeSystem` | `int32` | required | System sound volume (0–100) |
| `volumeFurni` | `int32` | required | Furni sound volume (0–100) |
| `volumeTrax` | `int32` | required | Music (Trax) volume (0–100) |
| `oldChat` | `boolean` | required | true = legacy bubble chat style; false = modern floating chat |
| `roomInvites` | `boolean` | required | Whether the user accepts room invitations from friends |
| `cameraFollow` | `boolean` | required | Whether the camera follows the user's avatar |
| `flags` | `int32` | required | Bitmask of miscellaneous client feature flags |
| `chatType` | `int32` | required | Preferred chat UI style: 0 = normal, 1 = wide |

## Behavior

### Sender
Sent by the server during the post-authentication burst to restore the user's saved preferences. All eight fields are always present.


### Receiver
The client applies each setting to the corresponding UI control and runtime state immediately upon receipt.

## Notes

- No additional notes

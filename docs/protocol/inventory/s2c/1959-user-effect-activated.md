---
title: user.effect_activated
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1959`
- **Header**: `USER_EFFECT_ACTIVATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that an avatar effect has been activated in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier that was activated |
| `duration` | `int32` | required | Remaining duration of the active effect in seconds |
| `isPermanent` | `boolean` | required | Whether the effect never expires |

## Behavior

### Sender
Sent after the server processes `user.effect_activate` (c2s 2959). Confirms the effect is now active on the avatar and provides its remaining duration.


### Receiver
The client applies the visual effect to the user's avatar and starts a client-side countdown timer based on `duration`.

## Notes

- No additional notes

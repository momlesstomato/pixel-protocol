---
title: user.effect_activate
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2959`
- **Header**: `USER_EFFECT_ACTIVATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Activate an avatar effect in the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier |

## Behavior

### Sender
Sent when the user activates an avatar effect from the inventory panel. The server applies the effect to the user's avatar in the current room and starts the duration timer.


### Receiver
The server marks the effect as active for the session and broadcasts the activation to the room via `user.effect_activated` (s2c 1959). If the effect is already active it may be extended or reset depending on the server implementation.

## Notes

- No additional notes

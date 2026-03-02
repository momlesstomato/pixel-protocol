---
title: user.effect_selected
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3473`
- **Header**: `AVATAR_EFFECT_SELECTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm the currently selected avatar effect

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier that is now selected |

## Behavior

### Sender
Sent in response to `user.effect_enable` (c2s 1752) to confirm which effect is currently selected in the inventory.


### Receiver
The client highlights the confirmed effect in the inventory panel.

## Notes

- No additional notes

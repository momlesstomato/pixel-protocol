---
title: user.effect_enable
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1752`
- **Header**: `USER_EFFECT_ENABLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Select or highlight an avatar effect in the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier to select |

## Behavior

### Sender
Sent when the user selects (enables) an avatar effect in the inventory list without necessarily activating it in a room. The server records the selection so it can be applied on the next room entry.


### Receiver
The server persists the selected effect. The client receives `user.effect_selected` (s2c 3473) confirming the selection.

## Notes

- No additional notes

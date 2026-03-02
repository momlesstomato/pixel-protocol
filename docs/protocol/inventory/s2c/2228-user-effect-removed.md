---
title: user.effect_removed
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2228`
- **Header**: `USER_EFFECT_LIST_REMOVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that an avatar effect has expired and been removed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier that was removed |

## Behavior

### Sender
Sent when an active or inventory avatar effect expires or is removed. The client removes the effect from the inventory list.


### Receiver
The client removes the effect entry matching the given type from the inventory panel.

## Notes

- No additional notes

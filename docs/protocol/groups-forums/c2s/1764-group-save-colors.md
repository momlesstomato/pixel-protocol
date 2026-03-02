---
title: group.save_colors
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1764`
- **Header**: `GROUP_SAVE_COLORS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the group badge colors

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `colorA` | `int32` | required | Primary badge color identifier. |
| `colorB` | `int32` | required | Secondary badge color identifier. |

## Behavior

### Sender
Sent when a group admin changes the primary and secondary badge colors.


### Receiver
The server updates the group colors. Confirmed in GLADIATOR.

## Notes

- No additional notes

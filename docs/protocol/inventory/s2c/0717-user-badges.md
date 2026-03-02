---
title: user.badges
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `717`
- **Header**: `USER_BADGES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full badge inventory and current slot assignments

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badgeCount` | `int32` | required | Number of owned badge entries that follow |

## Behavior

### Sender
Sent in response to `user.get_badges` (c2s 2769). Contains two arrays: all badges owned and the badges currently equipped in display slots.


### Receiver
The client populates the badge inventory panel and updates the equipped-badge display.

## Notes

- Each owned badge: `int32` badgeId, `string` badgeCode.
- After all owned badges, a second `int32` equippedCount is written, followed by equipped entries: `int32` slotId (1–5), `string` badgeCode.


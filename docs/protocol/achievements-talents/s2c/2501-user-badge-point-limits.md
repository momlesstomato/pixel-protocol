---
title: user.badge_point_limits
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2501`
- **Header**: `BADGE_POINT_LIMITS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver point thresholds for badge achievement levels

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `achievementCount` | `int32` | required | Number of achievement entries that follow |

## Behavior

### Sender
Sent in response to `user.get_badge_point_limits` (c2s 1371). For each achievement prefix the server lists how many points are required to reach each badge level.


### Receiver
The client uses the limits to render achievement progress bars in the badge achievement UI.

## Notes

- Each achievement entry: `string` achievementPrefix, `int32` levelCount, then for each level: `int32` levelSuffix (badge ID constructed as `ACH_{prefix}{levelSuffix}`), `int32` pointLimit.


---
title: user.get_badge_point_limits
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1371`
- **Header**: `GET_BADGE_POINTS_LIMITS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the point limits for badge achievement levels

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to fetch the point thresholds for each level of every badge achievement. Carries no payload.


### Receiver
The server responds with `user.badge_point_limits` (s2c 2501).

## Notes

- No additional notes

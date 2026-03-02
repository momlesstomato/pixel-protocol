---
title: user.permissions
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `411`
- **Header**: `USER_PERMISSIONS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the authenticated user's club level and security role

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clubLevel` | `int32` | required | Pixels Club subscription tier: 0 = none, 1 = basic Club, 2 = VIP<br/> |
| `securityLevel` | `int32` | required | Moderation role level: 0 = regular user, 1 = moderator, 2 = super-moderator, 3 = administrator<br/> |
| `isAmbassador` | `boolean` | required | Whether the user holds the Ambassador role |

## Behavior

### Sender
Sent by the server during the post-authentication burst. The three fields encode the user's Pixels Club tier, their moderation security level, and whether they hold the Ambassador role.


### Receiver
The client uses `clubLevel` to gate club-exclusive features (e.g. exclusive catalogue items, wardrobe slots). `securityLevel` controls access to moderation tools. `isAmbassador` unlocks the Ambassador helper badge and tools.

## Notes

- No additional notes

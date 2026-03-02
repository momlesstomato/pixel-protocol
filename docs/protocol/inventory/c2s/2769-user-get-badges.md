---
title: user.get_badges
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2769`
- **Header**: `USER_BADGES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the full badge inventory for the authenticated user

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client to load the complete badge inventory, including all earned badges and the current equipped-badge slot assignments. Carries no payload.


### Receiver
The server responds with `user.badges` (s2c 717) containing the full badge inventory and current slot assignments.

## Notes

- No additional notes

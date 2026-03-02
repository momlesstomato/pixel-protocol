---
title: user.get_group_badges
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `21`
- **Header**: `GROUP_BADGES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request badge codes for groups the user has joined

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to retrieve the badge codes for all Habbo groups the authenticated user is a member of. Carries no payload.


### Receiver
The server responds with `user.group_badges` (s2c 2402) containing each group ID and its badge code.

## Notes

- No additional notes

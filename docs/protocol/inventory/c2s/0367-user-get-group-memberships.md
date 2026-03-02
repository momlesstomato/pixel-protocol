---
title: user.get_group_memberships
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `367`
- **Header**: `GROUP_MEMBERSHIPS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the full list of groups the user belongs to

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to retrieve the user's complete group membership list, including full group entry data for each group. Carries no payload.


### Receiver
The server responds with `user.guild_memberships` (s2c 420) containing all group entries.

## Notes

- No additional notes

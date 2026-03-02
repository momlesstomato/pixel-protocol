---
title: user.get_current_badges
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2091`
- **Header**: `USER_BADGES_CURRENT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the equipped badges of a user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose equipped badges are requested |

## Behavior

### Sender
Sent to fetch the badge slots currently equipped by the target user. Used when rendering profile cards or in-room badge displays.


### Receiver
The server responds with `user.current_badges` (s2c 1087) containing the equipped badge codes and their slot assignments.

## Notes

- No additional notes

---
title: user.current_badges
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1087`
- **Header**: `USER_BADGES_CURRENT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the equipped badge slots for a user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose badges are listed |
| `count` | `int32` | required | Number of equipped badge entries that follow |

## Behavior

### Sender
Sent in response to `user.get_current_badges` (c2s 2091). Each entry carries the slot index and badge code for one equipped badge. Up to five badge slots may be occupied simultaneously.


### Receiver
The client stores the badge assignments and renders them on the profile card or in-room badge panel. Empty slots are not transmitted; only occupied slots appear in the list.

## Notes

- Each entry: `int32` slotId (1–5), `string` badgeCode.

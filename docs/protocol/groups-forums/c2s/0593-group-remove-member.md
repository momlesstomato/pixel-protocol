---
title: group.remove_member
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `593`
- **Header**: `GROUP_MEMBER_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove a member from the group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier to remove. |

## Behavior

### Sender
Sent by a group admin or owner when kicking a member from the group.


### Receiver
The server removes the member from the group. If the member had furniture placed in the group room, the confirm variant should be used first. Confirmed in GLADIATOR.

## Notes

- No additional notes

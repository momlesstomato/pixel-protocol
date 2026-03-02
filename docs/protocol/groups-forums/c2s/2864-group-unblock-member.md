---
title: group.unblock_member
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2864`
- **Header**: `GROUP_UNBLOCK_MEMBER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Unblock a previously blocked group member

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier to unblock. |

## Behavior

### Sender
Sent by a group admin when removing a block on a former member.


### Receiver
The server removes the block, allowing the user to request membership again.

## Notes

- No additional notes

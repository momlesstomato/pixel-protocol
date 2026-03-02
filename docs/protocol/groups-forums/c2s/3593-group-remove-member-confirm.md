---
title: group.remove_member_confirm
sidebar_position: 45
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3593`
- **Header**: `GROUP_MEMBER_REMOVE_CONFIRM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm member removal and get furniture impact

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier to check. |

## Behavior

### Sender
Sent before removing a member to check how many furniture items they have in the group room.


### Receiver
The server responds with the user ID and the count of furniture items that would be affected by removal. Confirmed in GLADIATOR.

## Notes

- No additional notes

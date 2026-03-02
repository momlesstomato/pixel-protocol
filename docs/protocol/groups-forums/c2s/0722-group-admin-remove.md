---
title: group.admin_remove
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `722`
- **Header**: `GROUP_ADMIN_REMOVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Demote a group admin to regular member

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier to demote. |

## Behavior

### Sender
Sent by the group owner when revoking admin rights from a member.


### Receiver
The server updates the member rank to regular member and refreshes the member list. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: group.admin_add
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2894`
- **Header**: `GROUP_ADMIN_ADD`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Promote a group member to admin

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier to promote. |

## Behavior

### Sender
Sent by the group owner when granting admin rights to a member.


### Receiver
The server updates the member rank to admin and refreshes the member list for connected viewers. Confirmed in GLADIATOR.

## Notes

- No additional notes

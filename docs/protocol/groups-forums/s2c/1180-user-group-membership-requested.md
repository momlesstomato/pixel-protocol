---
title: user.group_membership_requested
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1180`
- **Header**: `GROUP_MEMBERSHIP_REQUESTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a user has requested to join a group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | ID of the group the user has requested to join |

## Behavior

### Sender
Sent to group admins when a user submits a join request for a group that requires approval. Contains the group ID and the requesting member's details.


### Receiver
The client displays a join-request notification for the group admin to approve or deny.

## Notes

- After `groupId`, a single member entry follows: `int32` type, `int32` userId, `string` userName, `string` figure, `string` memberSince.

